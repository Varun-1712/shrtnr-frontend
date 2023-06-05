import React, { useEffect } from "react";
import styles from "./URLAnalyticsModal.module.css";
import { Text, Button, CopyButton, TextInput, Select } from "@mantine/core";
import QRCode from "react-qr-code";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
  Legend,
} from "recharts";
import { IconCopy, IconExternalLink, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

import { staticData } from "@/utils/staticData";
import { LIVE_URL } from "@/utils/api";
import { deleteUrl, getAnalytics, updateUrl } from "@/services/url.service";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
const { urlAnalyticsModal: COMPONENT_DATA } = staticData.components;

function URLAnalyticsModal({ user }) {
  const router = useRouter();
  const [cookies] = useCookies();
  const [urlInfo, setUrlInfo] = React.useState({
    id: null,
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch",
    shortUrl: "https://Shrtnr.live/random",
    name: "Untitled 8",
  });
  const [timeSelection, setTimeSelection] = React.useState(
    COMPONENT_DATA.inputs.timeSelection.options[0].value
  );
  const [chartData, setChartData] = React.useState(
    new Array(7).fill(0).map((_, index) => ({
      label: `${index}:00`,
      visits: Math.floor(Math.random() * 100),
    }))
  );
  const updateUrlName = async (name) => {
    try {
      if (urlInfo.name === "" && urlInfo.name === name) return;
      await updateUrl(cookies.token, {
        ...urlInfo,
        name: name,
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!user) return;
    const id = new URL(window.location.href).searchParams.get("id");
    const url = user.urls.filter((item) => item._id === id)[0];
    setUrlInfo({
      id: url._id,
      url: url.url,
      shortUrl: LIVE_URL + url.shorturl,
      name: url.name,
      createdAt: url.createdAt,
    });
  }, []);
  useEffect(() => {
    if (!user) return;
    if (!urlInfo.id) return;
    const buckets = {
      last24Hours: 1,
      last7Days: 7,
      last30Days: 30,
      allTime: 0,
    };

    const window = {
      start: new Date(
        new Date() - buckets[timeSelection] * 24 * 60 * 60 * 1000
      ).toISOString(),
      end: new Date().toISOString(),
    };
    if (buckets[timeSelection] === 0) {
      window.start = urlInfo.createdAt;
    }
    async function fetchAnalytics() {
      try {
        const analytics = await getAnalytics(
          cookies.token,
          urlInfo.id,
          window,
          timeSelection
        );
        if (analytics.length === 0) {
          setChartData([
            {
              label: "No Data",
              visits: 0,
            },
          ]);
          return;
        }
        setChartData(
          analytics.map((item) => ({
            label: item.time,
            visits: item.count,
          }))
        );
      } catch (err) {
        console.log(err);
      }
    }
    fetchAnalytics();
  }, [timeSelection, user]);

  return (
    <div className={styles.container}>
      <div>
        <TextInput
          label={COMPONENT_DATA.inputs.name.label}
          value={urlInfo.name}
          onChange={async (e) => {
            const name = e.currentTarget.value;
            updateUrlName(name);
            setUrlInfo({ ...urlInfo, name: e.currentTarget.value });
          }}
          size="md"
          compact
        />
      </div>
      <div className={styles.info}>
        <div>
          <QRCode value={urlInfo.shortUrl} size={150} />
        </div>
        <div className={styles.right}>
          <div>
            <CopyButton value={urlInfo.shortUrl}>
              {({ copied, copy }) => (
                <Button
                  color={copied ? "teal" : "blue"}
                  onClick={copy}
                  variant="light"
                  leftIcon={<IconCopy />}
                  size="md"
                >
                  {urlInfo.shortUrl}
                </Button>
              )}
            </CopyButton>
          </div>
          <div className={styles.originalURL}>
            <Text weight={"600"} color="black.4">
              {COMPONENT_DATA.originalURL}
            </Text>
            <Text color="black.8" weight={400} lineClamp={2}>
              {urlInfo.url}
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.analyticsHeader}>
        <Text weight={600} size="lg">
          {COMPONENT_DATA.analytics}
        </Text>
        <Select
          placeholder={COMPONENT_DATA.inputs.timeSelection.placeholder}
          data={COMPONENT_DATA.inputs.timeSelection.options}
          color="primary"
          size="md"
          value={timeSelection}
          onChange={(value) => {
            setTimeSelection(value);
          }}
        />
      </div>
      <div className={styles.anylytics}>
        <AreaChart width={500} height={251} data={chartData}>
          <Area
            type="monotone"
            dataKey="visits"
            stroke="#0f89f9"
            fill="#0E9CFF22"
            strokeWidth={2}
          />
          <CartesianGrid
            stroke="#eee"
            strokeDasharray="3 3"
            strokeDashoffset={15}
          />
          <XAxis dataKey="lable" />
          <YAxis />
          <Tooltip />
          <Legend />
        </AreaChart>
      </div>
      <div className={styles.bottom}>
        <Button
          color="red"
          rightIcon={<IconTrash />}
          size="md"
          variant="outline"
          onClick={async () => {
            try {
              await deleteUrl(cookies.token, urlInfo.id);
              router.push("/profile");
            } catch (err) {
              console.log(err);
            }
          }}
        >
          {COMPONENT_DATA.delete}
        </Button>
        <Link href="/profile" tabIndex={-1}>
          <Button
            size="md"
            variant="subtle"
            color="primary"
            compact
            rightIcon={<IconExternalLink size="0.9rem" />}
          >
            {COMPONENT_DATA.viewAllURLs}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default URLAnalyticsModal;

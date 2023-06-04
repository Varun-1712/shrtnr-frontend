import React from "react";
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
const { urlAnalyticsModal: COMPONENT_DATA } = staticData.components;

function URLAnalyticsModal() {
  const [urlInfo, setUrlInfo] = React.useState({
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

  return (
    <div className={styles.container}>
      <div>
        <TextInput
          label={COMPONENT_DATA.inputs.name.label}
          value={urlInfo.name}
          onChange={(e) => setUrlInfo({ ...urlInfo, name: e.target.value })}
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
          onChange={(value) => setTimeSelection(value)}
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

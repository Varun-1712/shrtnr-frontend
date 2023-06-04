import React from "react";
import styles from "./URLAddedModal.module.css";
import { Title, Text, Button, CopyButton } from "@mantine/core";
import QRCode from "react-qr-code";
import { IconCopy, IconChartArcs, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";

import { staticData } from "@/utils/staticData";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { getUrl } from "@/services/url.service";
import { LIVE_URL } from "@/utils/api";
const { urlAddedModal: COMPONENT_DATA } = staticData.components;

function URLAddedModal({ user }) {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["user"]);

  React.useEffect(() => {
    const urlID = new URLSearchParams(window.location.search).get("id");
    if (!urlID) {
      router.push("/");
    }
    async function fetchUrl() {
      try {
        const response = await getUrl(cookies.token, urlID);
        setUrlInfo({
          id: response._id,
          url: response.url,
          shortUrl: LIVE_URL + response.shorturl,
        });
        // setUrlInfo(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUrl();
  }, []);

  const [urlInfo, setUrlInfo] = React.useState({
    id: "1234567890",
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch",
    shortUrl: "https://Shrtnr.live/random",
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title order={3} color="secondary">
          {COMPONENT_DATA.title}
        </Title>
        <Text className={styles.subtitle} color="black.8" weight={400}>
          {COMPONENT_DATA.subtitle}
        </Text>
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
      <div className={styles.bottom}>
        <Link
          href={{
            query: {
              modal: "urlAnalytics",
            },
          }}
          tabIndex={-1}
        >
          <Button color="primary" rightIcon={<IconChartArcs />} size="md">
            {COMPONENT_DATA.getAnalytics}
          </Button>
        </Link>
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

export default URLAddedModal;

import React from "react";
import styles from "./URLAnalyticsModal.module.css";
import { Text, Button, CopyButton, TextInput, Select } from "@mantine/core";
import QRCode from "react-qr-code";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  IconCopy,
  IconChartArcs,
  IconExternalLink,
  IconTrash,
} from "@tabler/icons-react";

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

  const data = [
    { name: "S", uv: 348 },
    {
      name: "M",
      uv: 300,
    },
    {
      name: "T",
      uv: 200,
    },
    {
      name: "W",
      uv: 278,
    },
    {
      name: "T",
      uv: 189,
    },
    {
      name: "F",
      uv: 239,
    },
    {
      name: "S",
      uv: 349,
    },
  ];

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
        <LineChart width={500} height={251} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#0f89f9" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
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
        <Button
          component="a"
          size="md"
          href="/profile"
          variant="subtle"
          color="primary"
          compact
          leftIcon={<IconExternalLink size="0.9rem" />}
          style={{
            fontWeight: 500,
          }}
        >
          {COMPONENT_DATA.viewAllURLs}
        </Button>
      </div>
    </div>
  );
}

export default URLAnalyticsModal;

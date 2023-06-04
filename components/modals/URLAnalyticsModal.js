import React from "react";
import styles from "./URLAnalyticsModal.module.css";
import { Text, Button, CopyButton, TextInput, Select } from "@mantine/core";
import QRCode from "react-qr-code";
import { IconCopy, IconExternalLink, IconTrash } from "@tabler/icons-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { staticData } from "@/utils/staticData";
const { urlAnalyticsModal: COMPONENT_DATA } = staticData.components;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

function URLAnalyticsModal() {
  const [urlInfo, setUrlInfo] = React.useState({
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch",
    shortUrl: "https://Shrtnr.live/random",
    name: "Untitled 8",
  });
  const [timeSelection, setTimeSelection] = React.useState(
    COMPONENT_DATA.inputs.timeSelection.options[0].value
  );

  const data = {
    labels: ["", "", "", ""],
    datasets: [
      {
        label: "Visits",
        data: [50, 48, 43, 52],
        borderColor: "#0f89f9", // var(--primary-color)
      },
    ],
  };

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
          variant="unstyled"
          color="primary"
          style={{ color: "var(--primary-color)" }}
          size="md"
          value={timeSelection}
          onChange={(value) => setTimeSelection(value)}
        />
      </div>
      <div className={styles.anylytics}>
        <Line options={chartOptions} data={data} />
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

import React, { useEffect, useState } from "react";
import { Title, Text, ActionIcon, Button } from "@mantine/core";
import styles from "./History.module.css";

import { staticData } from "@/utils/staticData";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
const { history: COMPONENT_DATA } = staticData.pages.profile;

const TMP_SEARCH_HISTORY = new Array(5).fill(0).map(() => ({
  name: "Chad Schmeler",
  url: "Senior Developer",
  timestamp: new Date("6/5/2023, 3:39:48 AM").toLocaleString(),
}));

function History({ user }) {
  const [searchHistory, setSearchHistory] = useState([]);
  useEffect(() => {
    if (!user) return;
    setSearchHistory(user.urls);
  }, [user]);

  return (
    <div className={styles.container}>
      <Title size={24} order={2} weight={600}>
        {COMPONENT_DATA.title}
      </Title>
      <div className={styles.info}>
        {searchHistory.map((item, index) => (
          <Link
            key={index}
            className={styles.item}
            tabIndex={0}
            href={{
              query: {
                modal: "urlAnalytics",
                id: item._id,
              },
            }}
          >
            <div className={styles.itemInfo}>
              <Title size={18} weight={600} order={5}>
                {item.name}
              </Title>
              <Text size="sm" weight={500} color="primary" opacity={0.8}>
                {item.url}
              </Text>
            </div>
            <div className={styles.itemDate}>
              <Text size="sm" weight={500} color="black.8">
                {new Date(item.createdAt).toLocaleString()}
              </Text>
            </div>
            <div className={styles.itemAction}>
              <ActionIcon variant="transparent" color="primary" tabIndex={-1}>
                <Text size={28} weight={300}>
                  {">"}
                </Text>
              </ActionIcon>
            </div>
          </Link>
        ))}
      </div>
      {/* WILL ADD IF HAVE TIME */}
      {/* <Button
        size="md"
        variant="subtle"
        color="primary"
        compact
        rightIcon={<IconChevronDown />}
        className={styles.loadMore}
      >
        {COMPONENT_DATA.loadMore}
      </Button> */}
    </div>
  );
}

export default History;

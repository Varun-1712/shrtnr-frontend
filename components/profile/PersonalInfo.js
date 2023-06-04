import React from "react";
import styles from "./PersonalInfo.module.css";
import { Title, Text } from "@mantine/core";

import { staticData } from "@/utils/staticData";
import Image from "next/image";
const { personalInfo: COMPONENT_DATA } = staticData.pages.profile;

function PersonalInfo() {
  const [userData, setUserData] = React.useState({
    name: "Chad Schmeler",
    email: "johndoe@test.com",
    signedUpWith: "google",
  });
  return (
    <div className={styles.container}>
      <Title size={32}>{COMPONENT_DATA.title}</Title>
      <div className={styles.primaryInfo}>
        {COMPONENT_DATA.primaryFields.map((item, index) => (
          <div key={index} className={styles.infoItem}>
            <Text color="black.8" size="sm" weight={"600"}>
              {item.label}
            </Text>
            <Text size="lg" weight={"500"} color="secondary">
              {userData[item.accessor]}
            </Text>
          </div>
        ))}
      </div>
      <div className={styles.secInfoItem}>
        <Text color="black.8" size="sm" weight={"600"}>
          {COMPONENT_DATA.secondaryFields[0].label}
        </Text>
        <div className={styles.chip}>
          <Text weight={"500"} color="black.4">
            {
              COMPONENT_DATA.secondaryFields[0].valueOptions[
                userData[COMPONENT_DATA.secondaryFields[0].accessor]
              ].label
            }
          </Text>
          <Image
            src={
              COMPONENT_DATA.secondaryFields[0].valueOptions[
                userData[COMPONENT_DATA.secondaryFields[0].accessor]
              ].icon
            }
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Avatar } from "@mantine/core";
import { staticData } from "@/utils/staticData";

import styles from "./Header.module.css";

const { navbar: COMPONENT_DATA } = staticData.components;
const generalData = staticData.general;

function Header({ user }) {
  /** TODO: Fetched Data */
  // const userData = {
  //   _id: "random",
  //   firstName: "Raj",
  //   lastName: "Varsani",
  //   email: "zairestanton@gmail.com",
  // };
  const [userData, setUserData] = useState(user);
  useEffect(() => {
    setUserData(user);
  }, [user]);
  return (
    <nav className={styles.container}>
      <Link href="/">
        <Image
          src={generalData.logo.src}
          alt={generalData.logo.alt}
          className={styles.logo}
          loading="eager"
        />
        <Image
          src={generalData.logoIcon.src}
          alt={generalData.logoIcon.alt}
          className={styles.logoIcon}
        />
      </Link>
      {userData ? (
        <Avatar
          src={userData.image}
          alt={userData?.firstName + " " + userData?.lastName}
          color="secondary"
          component={Link}
          href={"/profile"}
        >
          {userData.image
            ? null
            : userData?.firstName[0] + userData?.lastName[0]}
        </Avatar>
      ) : (
        <ul className={styles.buttons}>
          <li>
            <Link
              href={{
                query: {
                  modal: COMPONENT_DATA.login.path,
                },
              }}
              tabIndex={-1}
            >
              <Button color="secondary" variant="subtle" size="md">
                {COMPONENT_DATA.login.name}
              </Button>
            </Link>
          </li>
          <li>
            <Link
              href={{
                query: {
                  modal: COMPONENT_DATA.register.path,
                },
              }}
              tabIndex={-1}
            >
              <Button color="secondary" size="md" variant="outline">
                {COMPONENT_DATA.register.name}
              </Button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Header;

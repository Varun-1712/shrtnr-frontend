import React from "react";
import Image from "next/image";
import { Button, TextInput, Title, Text } from "@mantine/core";
import styles from "./Hero.module.css";
import { IconExternalLink } from "@tabler/icons-react";

import { staticData } from "@/utils/staticData";
import { useRouter } from "next/router";
import { addUrl } from "@/services/url.service";
import { useCookies } from "react-cookie";
const { hero: COMPONENT_DATA } = staticData.pages.index;

const getStyleElementProps = (element) => {
  const size = `calc(${element.size / (2 * 16)}rem + ${
    element.size / (1280 * 2)
  } * 100vw)`;
  const stylesToReturn = {
    height: size,
    width: size,
  };

  ["right", "left"].forEach((side) => {
    if (element[side])
      stylesToReturn[side] = `calc(${element[side] / (2 * 16)}rem + ${
        element[side] / (1280 * 2)
      } * 100vw)`;
  });

  ["top", "bottom"].forEach((side) => {
    if (element[side])
      stylesToReturn[side] = `calc(${element[side] / (2 * 16)}rem + ${
        element[side] / (832 * 2)
      } * 100vh)`;
  });

  return stylesToReturn;
};

function Hero({ user }) {
  const router = useRouter();
  const [userData, setUserData] = React.useState(user);
  const [url, setUrl] = React.useState("");

  const [cookies, setCookie] = useCookies();

  React.useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = cookies.token;
    if (token) {
      try {
        const response = await addUrl(token, url);
        const id = response._id;
        router.push(`/?modal=urlAdded&id=${id}`);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("User not logged in");
      router.push("/?modal=login");
    }
  };

  return (
    <div className={styles.container}>
      {COMPONENT_DATA.styleElements.map((element, index) => {
        return (
          <div
            key={index}
            className={styles.styleElement}
            style={getStyleElementProps(element)}
          ></div>
        );
      })}
      <div className={styles.top}>
        <Title order={1} className={styles.title} align="center">
          {COMPONENT_DATA.title.map((title, index) => {
            return (
              <Text key={index} color={title.color} inherit order={1} span>
                {title.content}
              </Text>
            );
          })}
        </Title>
        <form className={styles.searchBar} onSubmit={handleSubmit}>
          <TextInput
            placeholder={COMPONENT_DATA.searchBar.placheHolder}
            className={styles.input}
            variant="unstyled"
            size="lg"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <Button
            type="submit"
            color="ternary"
            variant="filled"
            size="md"
            className={styles.button}
            radius="xl"
          >
            {COMPONENT_DATA.searchBar.button.label}
          </Button>
        </form>
        <Button
          component="a"
          size="md"
          href="/profile"
          variant="subtle"
          color="primary"
          compact
          rightIcon={<IconExternalLink size="0.9rem" />}
        >
          {COMPONENT_DATA.viewAllURLs}
        </Button>
      </div>
      <Image
        src={COMPONENT_DATA.cover.src}
        alt={COMPONENT_DATA.cover.alt}
        className={styles.cover}
      />
    </div>
  );
}

export default Hero;

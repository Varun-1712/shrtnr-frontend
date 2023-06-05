import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import localFont from "next/font/local";
import Header from "@/components/general/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "@/utils/config";
import Head from "next/head";
import { RouterTransition } from "@/components/RouterTransition";
import { useEffect, useState } from "react";
import { getUserData } from "@/services/user.service";
import { useCookies } from "react-cookie";

const gilroyFont = localFont({
  src: [
    {
      path: "./Gilroy-Thin.ttf",
      style: "normal",
      weight: "100",
    },
    {
      path: "./Gilroy-ThinItalic.ttf",
      style: "italic",
      weight: "100",
    },
    {
      path: "./Gilroy-UltraLight.ttf",
      style: "normal",
      weight: "200",
    },
    {
      path: "./Gilroy-UltraLightItalic.ttf",
      style: "italic",
      weight: "200",
    },
    {
      path: "./Gilroy-Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./Gilroy-LightItalic.ttf",
      style: "italic",
      weight: "300",
    },
    {
      path: "./Gilroy-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./Gilroy-RegularItalic.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "./Gilroy-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./Gilroy-MediumItalic.ttf",
      style: "italic",
      weight: "500",
    },
    {
      path: "./Gilroy-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./Gilroy-SemiBoldItalic.ttf",
      style: "italic",
      weight: "600",
    },
    {
      path: "./Gilroy-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./Gilroy-BoldItalic.ttf",
      style: "italic",
      weight: "700",
    },
    {
      path: "./Gilroy-ExtraBold.ttf",
      style: "normal",
      weight: "800",
    },
    {
      path: "./Gilroy-ExtraBoldItalic.ttf",
      style: "italic",
      weight: "800",
    },
    {
      path: "./Gilroy-Black.ttf",
      style: "normal",
      weight: "900",
    },
    {
      path: "./Gilroy-BlackItalic.ttf",
      style: "italic",
      weight: "900",
    },
  ],
});

export default function MyApp({ Component, pageProps }) {
  const [cookies, setCookies] = useCookies();
  const [user, setUserData] = useState(null);

  useEffect(() => {
    const token = cookies.token;
    if (token && !user) {
      setUser(token);
    }
  }, []);

  const setUser = async (token) => {
    try {
      const data = await getUserData(token);
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Shrtnr.live</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <style jsx global>{`
        * {
          font-family: ${gilroyFont.style.fontFamily};
        }
      `}</style>
      <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Mantine theme override here */
            colorScheme: "light",
            colors: {
              primary: [
                "#E5F4FF",
                "#A8D9FF",
                "#72C2FF",
                "#43ADFF",
                "#1E9AFF",
                "#0F89F9",
                "#0078F4",
                "#0069DA",
                "#005BBD",
                "#004FA5",
              ],
              secondary: [
                "#EDEEF6",
                "#5F6EBB",
                "#29377C",
                "#131C4E",
                "#070E32",
                "#010620",
                "#00010A",
                "#000003",
                "#000001",
                "#000107",
              ],
              ternary: [
                "#EDEBE9",
                "#D6D1C9",
                "#C8BBA8",
                "#C5AA80",
                "#D49E4C",
                "#FF9900",
                "#B37C2B",
                "#84683D",
                "#675841",
                "#534B3F",
              ],
              black: [
                "#000000",
                "#111111",
                "#222222",
                "#333333",
                "#444444",
                "#555555",
                "#666666",
                "#777777",
                "#888888",
                "#999999",
              ],
            },
            primaryShade: 5,
            primaryColor: "primary",
            fontFamily: gilroyFont.style.fontFamily,
            defaultRadius: "var(--general-box-border-radius)",
            headings: {
              fontFamily: gilroyFont.style.fontFamily,
              sizes: {
                h1: { fontSize: "var(--h1)" },
                h2: { fontSize: "var(--h2)" },
                h3: { fontSize: "var(--h3)" },
                h4: { fontSize: "var(--h4)" },
                h5: { fontSize: "var(--h5)" },
                h6: { fontSize: "var(--h6)" },
              },
            },
            fontSizes: {
              xs: "0.625rem",
              sm: "0.875rem",
              md: "1rem",
              lg: "1.125rem",
              xl: "1.25rem",
              xxl: "1.5rem",
            },
          }}
        >
          <RouterTransition />
          <Header user={user} />
          <Component
            {...pageProps}
            user={user}
            updateUser={() => {
              setUser(cookies.token);
            }}
          />
        </MantineProvider>
      </GoogleOAuthProvider>
    </>
  );
}

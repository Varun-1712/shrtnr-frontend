/** General Assets */
import Logo from "@/assets/Logo.svg";
import LogoIcon from "@/assets/LogoIcon.svg";

/** Home Page Assets */
import HomeHeroCover from "@/assets/home/HeroCover.svg";

export const staticData = {
  pages: {
    index: {
      // This is an example of data that is used in the index page.
      // The data can be accessed in the page using the following syntax:
      // import { staticData } from "@/utils/staticData";
      // const { index: PAGE_DATA } = staticData.pages;

      hero: {
        styleElements: [
          {
            size: 200,
            left: -40,
            top: 276,
          },
          {
            size: 100,
            top: 226,
            left: 120,
          },
          {
            size: 92,
            top: 134,
            right: 32,
          },
          {
            size: 58,
            bottom: 110,
            right: 188
          },
        ],
        title: [
          {
            content: "Mastering the Art of ",
            color: "secondary",
          },
          {
            content: "Shortened",
            color: "primary",
          },
          {
            content: " Links",
            color: "secondary",
          },
        ],
        cover: {
          src: HomeHeroCover,
          alt: "Managing Links",
        },
        searchBar: {
          placheHolder: "Enter Link Here",
          button: {
            label: "Shrtn",
          },
        },
      },
    },
  },
  components: {
    index: {
      // This is an example of data that is used in the home's components.
      // The data can be accessed in the component using the following syntax:
      // import { staticData } from "@/utils/staticData";
      // const { categoriesList: COMPONENT_DATA } = staticData.components.index;
    },
    navbar: {
      login: { name: "Login", path: "login" },
      register: { name: "Get Started", path: "register" },
    },
  },
  general: {
    logo: {
      src: Logo,
      alt: "Shrtnr.live",
    },
    logoIcon: {
      src: LogoIcon,
      alt: "Shrtnr.live",
    },
  },
};

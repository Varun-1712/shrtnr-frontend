/** General Assets */
import Logo from "@/assets/Logo.svg";
import LogoIcon from "@/assets/LogoIcon.svg";

export const staticData = {
  pages: {
    index: {
      // This is an example of data that is used in the index page.
      // The data can be accessed in the page using the following syntax:
      // import { staticData } from "@/utils/staticData";
      // const { index: PAGE_DATA } = staticData.pages;
      hero: {
        title:
          "Revolutionize your hiring process with AI-driven profile insights",
        cta: "Get Chrome Extension Now",
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
        alt: "Career Copilot",
      },
      logoIcon: {
        src: LogoIcon,
        alt: "Career Copilot",
      },
    },
  },
};

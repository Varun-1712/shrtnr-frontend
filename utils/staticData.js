/** General Assets */
import Logo from "@/assets/Logo.svg";
import LogoIcon from "@/assets/LogoIcon.svg";

/** Icons */
import IconGoogle from "@/assets/icons/Google.svg";

/** Home Page Assets */
import HomeHeroCover from "@/assets/home/HeroCover.svg";
import AuthModalImage from "@/assets/home/AuthModalImage.svg";

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
            right: 188,
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
      authModal: {
        titles: {
          login: {
            title: "Welcome Back",
            subTitle:
              "Continue your journey of the streamlining hiring process with us",
          },
          register: {
            title: "Get Started with Us",
            subTitle:
              "it takes only 2 minutes to get started with us and Unleash your full potential",
          },
        },
        inputs: [
          {
            name: "firstName",
            label: "First Name",
            type: "text",
            placeholder: "Enter your first name",
            required: true,
            for: ["register"],
            autoComplete: "given-name",
          },
          {
            name: "lastName",
            label: "Last Name",
            type: "text",
            placeholder: "Enter your last name",
            required: true,
            for: ["register"],
            autoComplete: "family-name",
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
            required: true,
            for: ["register", "login"],
            autoComplete: "email",
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password",
            required: true,
            for: ["register", "login"],
            autoComplete: "current-password",
          },
          {
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Confirm your password",
            required: true,
            for: ["register"],
            autoComplete: "new-password",
          },
        ],
        buttons: {
          submit: {
            label: "Continue",
          },
          google: {
            label: "Continue with Google",
          },
        },
        changeMode: {
          login: {
            label: "Don't have an account?",
            button: {
              label: "Get Started",
              path: "register",
            },
          },
          register: {
            label: "Already have an account?",
            button: {
              label: "Login",
              path: "login",
            },
          },
        },
        cover: {
          src: AuthModalImage,
          alt: "Automating hiring process",
          width: 371,
          height: 274,
        },
      },
      modalAllowedRouteValues: {
        login: true,
        register: true,
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
    icons: {
      google: {
        src: IconGoogle,
        alt: "Google",
      },
    },
    content: {
      or: "or",
    },
  },
};

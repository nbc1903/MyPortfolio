import PortfolioImage from "/src/assets/portfolio-image.png";
import CS50GameImage from "/src/assets/cs50-game-image.png";
import MultiverseBoundImage from "/src/assets/multiverse-bound-image.webp";
import { ReactComponent as GameLogo } from "../assets/game-8-svgrepo-com.svg";
import { ReactComponent as YoutubeLogo } from "../assets/youtube-svgrepo-com.svg";
import { ReactComponent as GithubLogo } from "../assets/github.svg";

export const content = {
  about: {
    workStartingDate: "2020-01-13T00:00:00-05:00",
  },
  experiences: {
    globantColsubsidio: {
      company: "Globant - Colsubsidio",
      tags: [
        "ReactJS",
        "TypeScript",
        "Vite",
        "React Testing Library",
        "Vitest",
        "Storybook",
        "NextJS 13",
        "Material UI",
        "Sass",
        "CSS Modules",
        "Styled Components",
        "Figma Dev",
      ],
    },
    globantPvolve: {
      company: "Globant - Pvolve",
      tags: [
        "ReactJS",
        "Typescript",
        "NextJS",
        "Contentful",
        "HTML",
        "CSS",
        "Redux-Sagas",
        "Styled Components",
        "Figma Dev",
        "Material UI",
        "Jira",
        "Confluence",
      ],
    },
    Defytek: {
      company: "Defytek SAS.",
      tags: [
        "PHP",
        "VanillaJS",
        "HTML",
        "CSS",
        "Jquery",
        "Axios",
        "Leaflet",
        "MySQL",
      ],
    },
    Siemens: {
      company: "Siemens S.A.",
      tags: ["Xamarin", "C#", ".NET", "MVC", "SQL server"],
    },
  },
  projects: {
    CS50FinalProject: {
      image: {
        src: CS50GameImage,
      },
      links: [
        {
          Icon: YoutubeLogo,
          href: "https://www.youtube.com/watch?v=rDrfh1IYnQY",
        },
        {
          Icon: GithubLogo,
          href: "https://github.com/nbc1903/CS50_Final_Project",
        },
      ],
      tags: ["Unity", "C#"],
    },
    MultiverseBound: {
      image: {
        src: MultiverseBoundImage,
      },
      links: [
        {
          Icon: YoutubeLogo,
          href: "https://www.youtube.com/watch?v=d-Bo5diobIU",
        },
        {
          Icon: GameLogo,
          href: "https://itch.io/jam/gmtk-2021/rate/1086922",
        },
      ],
      tags: ["Unity", "C#"],
    },
    PortfolioWebSite: {
      image: {
        src: PortfolioImage,
      },
      link: "https://github.com/nbc1903/MyPortfolio",
      tags: [
        "ReactJS",
        "Vite",
        "Tailwind",
        "Framer Motion",
        "i18next",
        "TypeScript",
      ],
    },
  },
};

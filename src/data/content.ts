import PortfolioImage from "/src/assets/portfolio-image.png";
import CS50GameImage from "/src/assets/cs50-game-image.png";
import MultiverseBoundImage from "/src/assets/multiverse-bound-image.webp";
import CS50ChallengesImage from "/src/assets/cs50-challenges-image.webp";
import SlendermanGameImage from "/src/assets/slenderman-de-la-sabana-image.webp";
import ThalKnightImage from "/src/assets/thal-knight-image.webp";
import AlgoExpertCertImage from "/src/assets/cert-algoexpert.png";
import AndesGamesCertImage from "/src/assets/cert-andes-games.png";
import CloudEdxCertImage from "/src/assets/cert-cloud-edx-ibm.png";
import CS50GamesCertImage from "/src/assets/cert-cs50-games.png";
import PatternsUdemyCertImage from "/src/assets/cert-patrones-udemy.jpg";
import ReactUdemyCertImage from "/src/assets/cert-react-udemy.jpg";
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
    defytek: {
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
    siemens: {
      company: "Siemens S.A.",
      tags: ["Xamarin", "C#", ".NET", "MVC", "SQL server"],
    },
  },
  projects: {
    cS50FinalProject: {
      image: {
        src: CS50GameImage,
      },
      links: [
        {
          Icon: YoutubeLogo,
          href: "https://www.youtube.com/watch?v=rDrfh1IYnQY",
          alt: "youtube link",
        },
        {
          Icon: GithubLogo,
          href: "https://github.com/nbc1903/CS50_Final_Project",
          alt: "github link",
        },
      ],
      tags: ["Unity", "C#"],
    },
    multiverseBound: {
      image: {
        src: MultiverseBoundImage,
      },
      links: [
        {
          Icon: YoutubeLogo,
          href: "https://www.youtube.com/watch?v=d-Bo5diobIU",
          alt: "youtube link",
        },
        {
          Icon: GameLogo,
          href: "https://itch.io/jam/gmtk-2021/rate/1086922",
          alt: "game link",
        },
      ],
      tags: ["Unity", "C#"],
    },
    slendermanSabana: {
      image: {
        src: SlendermanGameImage,
      },
      link: "https://nicolasbc1903.itch.io/slenderman-de-la-sabana",
      tags: ["Unity", "C#", "Blender"],
    },
    thalKnight: {
      image: {
        src: ThalKnightImage,
      },
      link: "https://nicolasbc1903.itch.io/thal-knight",
      tags: ["Unity", "C#"],
    },
    cS50Challenges: {
      image: {
        src: CS50ChallengesImage,
      },
      link: "https://www.youtube.com/playlist?list=PL4Y-StkOoFMyAIgbNFlvSrEAIJ94PvyBN",
      tags: ["Unity", "C#", "Love2D", "LUA"],
    },
    portfolioWebSite: {
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
  certificates: {
    algoExpertCert: {
      src: AlgoExpertCertImage,
      href: "https://certificate.algoexpert.io/AE-9ca005bf1d",
    },
    andesGamesCert: {
      src: AndesGamesCertImage,
      href: "https://coursera.org/share/943cff5de6461a76951aabfb1aff97cc",
    },
    cloudEdxCert: {
      src: CloudEdxCertImage,
      href: "https://courses.edx.org/certificates/90819679e9374560bf0b1efefdca76c1?_gl=1*q6oceb*_ga*ODAwMTQ5ODg4LjE3MDExMTc2MzY.*_ga_D3KS4KMDT0*MTcwMTExOTU3OS4yLjAuMTcwMTExOTU3OS42MC4wLjA.",
    },
    cs50GamesCert: {
      src: CS50GamesCertImage,
      href: "https://courses.edx.org/certificates/aeb9d41b05a1413a81ec77a13156fe00?_gl=1*q6oceb*_ga*ODAwMTQ5ODg4LjE3MDExMTc2MzY.*_ga_D3KS4KMDT0*MTcwMTExOTU3OS4yLjAuMTcwMTExOTU3OS42MC4wLjA.",
    },
    patternsUdemyCert: {
      src: PatternsUdemyCertImage,
      href: "https://www.udemy.com/certificate/UC-b0ce4d87-89d0-4ab3-8688-66bc9be69b0b",
    },
    reactUdemyCert: {
      src: ReactUdemyCertImage,
      href: "https://www.udemy.com/certificate/UC-84788bae-97ad-46f4-b5da-30068463f483",
    },
  },
};

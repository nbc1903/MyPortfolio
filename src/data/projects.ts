import PortfolioImage from "/src/assets/portfolio-image.png";
import GameImage from "/src/assets/game-image.png";

export const projects = [
  {
    title: "CS50 Game Development Final Project",
    description:
      "Final project for the CS50’s Harvard Introduction to Game Development. Game with procedural generation of terrain and an RPG and final boss mechanics.",
    image: GameImage,
    link: "https://www.youtube.com/watch?v=rDrfh1IYnQY",
    tags: ["Unity", "C#"],
  },
  {
    title: "Website Portfolio",
    description:
      "Portfolio to keep track of work and projects. Built and designed from scratch. There is more information that will be coming out soon.",
    image: PortfolioImage,
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
];

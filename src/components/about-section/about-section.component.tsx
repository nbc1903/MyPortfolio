import SectionTitle from "../shared/section-title.component";
import { about } from "../../data/about";

const AboutSection = () => {
  return (
    <section id="about" className="navigation_section">
      <SectionTitle title="About me" />
      <div className="flex flex-col gap">
        {about.content.map((paragraph, idx) => (
          <p
            key={`paragraph-$${idx}`}
            className="text-sm text-gray-400 mb-2 leading-normal"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className="flex justify-evenly gap-5 mt-12 mix-blend-soft-light opacity-50">
        <img
          className="flex-grow w-0 rounded-lg object-contain max-w-[40px]"
          src="/src/assets/typescript.svg"
          alt="typescript"
        />
        <img
          className="flex-grow w-0 rounded-lg object-contain max-w-[40px]"
          src="/src/assets/react.svg"
          alt="react--v1"
        />
        <img
          className="flex-grow w-0 rounded-lg object-contain max-w-[40px]"
          src="/src/assets/javascript-js-square.svg"
          alt="javascript--v1"
        />
      </div>
    </section>
  );
};

export default AboutSection;

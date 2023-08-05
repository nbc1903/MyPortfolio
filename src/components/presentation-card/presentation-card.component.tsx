import { presentationContactButtons } from "../../data/presentation-contact-buttons";
import ButtonIcon from "./button-icon.component";

const PresentationCard = () => {
  return (
    <section
      id="home"
      className="navigation_section border border-cyan-200 rounded-3xl flex flex-col items-center text-center pb-8 pt-6 px-5"
    >
      <h1 className="text-3xl font-bold mt-3"> Nicolás Bolaños Castro</h1>
      {/* <img src='/src/assets/animoji-FA.webp' width='40px' height='40px'/> */}
      <h2 className="mt-1 text-xl font-semibold"> Web UI Developer </h2>
      <p className="text-brandColors-text mt-3 text-sm font-semibold">
        nicolas.bolanos97@gmail.com
      </p>
      <div className="flex gap-2 mt-3 mb-2">
        {presentationContactButtons.map((contactButton) => (
          <ButtonIcon key={contactButton.title} {...contactButton} />
        ))}
      </div>
    </section>
  );
};

export default PresentationCard;

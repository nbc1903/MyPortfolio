import { presentationContactButtons } from "../../data/presentation-contact-buttons";
import ButtonIcon from "./button-icon.component";
import BackgroundVideo from "../../assets/presentation-bg.mp4";
import RevealAnimation from "../shared/reveal-animation.component";

const PresentationCard = () => {
  return (
    <section id="home" className="navigation_section xl:fixed  xl:w-1/4">
      <RevealAnimation type="left">
        <div className="overflow-hidden relative shadow-lg shadow-gray-950 rounded-3xl flex flex-col items-center text-center pb-8 pt-6 px-5 xl:h-[calc(100vh-160px)]">
          <video
            className="absolute left-1/2 top-0 max-w-none h-full min-[625px]:w-full min-[625px]:h-auto xl:h-full xl:w-auto -translate-x-1/2 -z-10 hue-rotate-60 opacity-10 contrast-200 blur-sm"
            preload="true"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-4xl font-bold mt-3">Nicolás Bolaños Castro</h1>
            {/* <img src='/src/assets/animoji-FA.webp' width='40px' height='40px'/> */}
            <h2 className="mt-3 text-xl">Web UI Developer</h2>
            <p className="text-brandColors-text mt-3 text-sm">
              nicolas.bolanos97@gmail.com
            </p>
            <div className="flex gap-2 xl:gap-10 xl:mt-24 mt-3 mb-2 justify-center">
              {presentationContactButtons.map((contactButton) => (
                <ButtonIcon key={contactButton.title} {...contactButton} />
              ))}
            </div>
            <a
              href="mailto:nicolas.bolanos97@gmail.com"
              className="mt-5 xl:mt-14 py-5 px-10 rounded-md mx-auto text-lg font-bold border-cyan-200 transition border text-cyan-200 shadow-slate-950 hover:-translate-y-1 hover:shadow-[0_4px_0_0] hover:shadow-cyan-200 cursor-pointer"
            >
              Contact Me!
            </a>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default PresentationCard;

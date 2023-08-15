import { presentationContactButtons } from "../../data/presentation-contact-buttons";
import ButtonIcon from "./button-icon.component";
import BackgroundVideo from "../../assets/presentation-bg.mp4";
import RevealAnimation from "../shared/reveal-animation.component";

const PresentationCard = () => {
  return (
    <section id="home" className="navigation_section xl:fixed  xl:w-1/4">
      <RevealAnimation type="left">
        <div className="relative flex flex-col items-center overflow-hidden rounded-3xl px-5 pb-8 pt-6 text-center shadow-lg shadow-gray-950 xl:h-[calc(100vh-160px)]">
          <video
            className="absolute left-1/2 top-0 -z-10 h-full max-w-none -translate-x-1/2 opacity-10 blur-[2px] contrast-200 hue-rotate-60 min-[625px]:h-auto min-[625px]:w-full xl:h-full xl:w-auto"
            preload="true"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
          <div className="flex h-full flex-col justify-center">
            <h1 className="mt-3 text-4xl font-bold">Nicolás Bolaños Castro</h1>
            {/* <img src='/src/assets/animoji-FA.webp' width='40px' height='40px'/> */}
            <h2 className="mt-3 text-xl">Web UI Developer</h2>
            <p className="mt-3 text-sm text-brandColors-text">
              nicolas.bolanos97@gmail.com
            </p>
            <div className="mb-2 mt-3 flex justify-center gap-2 xl:mt-24 xl:gap-10">
              {presentationContactButtons.map((contactButton) => (
                <ButtonIcon key={contactButton.title} {...contactButton} />
              ))}
            </div>
            <a
              href="mailto:nicolas.bolanos97@gmail.com"
              className="mx-auto mt-5 cursor-pointer rounded-md border border-cyan-200 px-10 py-5 text-lg font-bold text-cyan-200 shadow-slate-950 transition hover:-translate-y-1 hover:shadow-[0_4px_0_0] hover:shadow-cyan-200 xl:mt-14"
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

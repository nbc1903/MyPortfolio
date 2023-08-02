import ButtonIcon from "./shared/button-icon.component";
import { ReactComponent as GithubLogo } from "../assets/github.svg";
import { ReactComponent as LinkedInLogo } from "../assets/linkedin.svg";
import { ReactComponent as EmailLogo } from "../assets/email.svg";

interface PresentationCard {
  id: string;
}

const PresentationCard: React.FC<PresentationCard> = ({ id }) => {
  return (
    <section
      id={id}
      className="navigation_section border-gray-500 rounded-3xl flex flex-col items-center text-center pb-8 pt-6 px-5 shadow-cyan-500 shadow-lg"
    >
      <h1 className="text-3xl font-bold mt-2"> Nicolás Bolaños Castro</h1>
      {/* <img src='/src/assets/animoji-FA.webp' width='40px' height='40px'/> */}
      <h2 className="mt-1 text-xl font-semibold"> Web UI Developer </h2>
      <p className="text-gray-400 mt-2 text-sm font-semibold">
        nicolas.bolanos97@gmail.com
      </p>
      <div className="flex gap-2 mt-3 mb-2">
        <ButtonIcon href="/" Icon={GithubLogo} />
        <ButtonIcon href="/" Icon={LinkedInLogo} />
        <ButtonIcon
          href="mailto:nicolas.bolanos97@gmail.com"
          Icon={EmailLogo}
        />
      </div>
    </section>
  );
};

export default PresentationCard;

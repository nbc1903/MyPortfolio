import { AcademicCapIcon } from "@heroicons/react/24/outline";
import useContentTranslation from "../../hooks/useContentTranslation";
import { Certificates } from "../../types/contentTypes";
import RevealAnimation from "../shared/reveal-animation.component";
import SectionTitle from "../shared/section-title.component";
import useCurrentLanguage from "../../hooks/useCurrentLanguage";
import { certificatesSectionConstants } from "./constants/certificates-section-constants";
import ImageGallery from "../shared/image-gallery.component";

const CertificatesSection = () => {
  const certificatesContent =
    useContentTranslation<Certificates>("certificates");
  const { currentLanguage } = useCurrentLanguage();
  const { sectionTitle } = certificatesSectionConstants[currentLanguage];
  const certificates = Object.values(certificatesContent);

  return (
    <RevealAnimation type="down">
      <section id="certificates" className="navigation_section">
        <SectionTitle Icon={AcademicCapIcon} title={sectionTitle} />

        <ImageGallery images={certificates} />
      </section>
    </RevealAnimation>
  );
};

export default CertificatesSection;

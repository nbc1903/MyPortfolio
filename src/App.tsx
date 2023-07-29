import { Swiper, SwiperSlide } from "./components/horizontal-slider.component";
//import HorizontalSlider from './components/horizontal-slider.component'
import JobExperienceSection from "./components/job-experience-section.component";
import PresentationCard from "./components/presentation-card.component";
import ProjectSection from "./components/project-section.component";
import { experiences } from "./data/experiences";
import { projects } from "./data/projects";
import { EffectCards } from "swiper/modules";

function App() {
  return (
    <>
      <PresentationCard />
      <div className="mt-10">
        {experiences.map((experience, idx) => (
          <JobExperienceSection key={`job-${idx}`} {...experience} />
        ))}
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{ 900: { slidesPerView: 3 } }}
        on={{
          slideChange: (arg) => console.log("active index", arg.activeIndex),
        }}
        effect={"cards"}
        modules={[EffectCards]}
        navigation={true}
        pagination={true}
        loop={true}
        spaceBetween={50}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={`project-slide-${idx}`}>
            <ProjectSection {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default App;

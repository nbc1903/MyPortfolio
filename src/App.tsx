import JobExperienceSection from './components/job-experience-section.component'
import PresentationCard from './components/presentation-card.component'
import { experiences } from './data/experiences'

function App() {

  return (
    <>
      <PresentationCard />
      <div className='mt-10'>
        {experiences.map(experience =>  <JobExperienceSection {...experience}/>)}
      </div>     
    </>
  )
}

export default App

export interface Content {
  about: About;
  experiences: JobExperiences;
  projects: Projects;
}

export interface About {
  workStartingDate: string;
  content: string[];
}

export type JobExperiencesKey =
  | "globantColsubsidio"
  | "globantPvolve"
  | "Defytek"
  | "Siemens";

export interface JobExperiences {
  [jobExperience: JobExperienceKey]: JobExperience;
}

export interface JobExperience {
  date: string;
  company: string;
  jobTitle: string;
  duties: string;
  achievements: string[];
  tags: string[];
}

export type ProjectsKey = "cS50FinalProject" | "portfolioWebSite";

export interface Projects {
  [project: ProjectsKey]: Project;
}

export interface Project {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  link?: string;
  links?: Array<{
    Icon: React.ElementType;
    href: string;
    alt: string;
  }>;
  tags: string[];
}

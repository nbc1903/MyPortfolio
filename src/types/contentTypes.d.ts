export interface Content {
  about: About;
  experiences: JobExperiences;
  projects: Projects;
  certificates: Certificates;
}

export interface About {
  workStartingDate: string;
  content: string[];
}

export type JobExperiencesKey =
  | "globantColsubsidio"
  | "globantPvolve"
  | "defytek"
  | "siemens";

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

export type ProjectsKey =
  | "cS50FinalProject"
  | "multiverseBound"
  | "slendermanSabana"
  | "cS50Challenges"
  | "thalKnight"
  | "portfolioWebSite";

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

export type CertificatesKey =
  | "algoExpertCert"
  | "andesGamesCert"
  | "cloudEdxCert"
  | "cs50GamesCert"
  | "patternsUdemyCert"
  | "reactUdemyCert";

export interface Certificates {
  [certificate: CertificatesKey]: Certificates;
}

export interface Certificate {
  src: string;
  href: string;
  title: string;
}

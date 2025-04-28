export type TechStack = string;

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  github: string;
  appearance: "Public" | "Private";
  videoUrl: string;
  techStack: TechStack[];
  demo?: string;
};

import { BiCode, BiLogoTypescript } from "react-icons/bi";
import { BsStripe } from "react-icons/bs";
import {
  DiFirebase,
  DiJavascript,
  DiMongodb,
  DiPostgresql,
} from "react-icons/di";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaNodeJs
} from "react-icons/fa";
import { GiFlame } from "react-icons/gi";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiNestjs, SiShadcnui } from "react-icons/si";
export const techStack = [
  {
    icon: FaLinkedin,
    username: "Syed Azlan zar",
    url: "https://linkedin.com/in/syed-azlan-zar",
    target: "_blank",
  },
  {
    icon: FaGithub,
    username: "Azlan zar",
    url: "https://github.com/SyedAzlanzar",
    target: "_blank",
  },
  {
    icon: FaEnvelope,
    username: "syedazlan.emcr@gmail.com",
    url: "mailto:syedazlan.emcr@gmail.com",
    target: "_blank",
  },
];

export const skills = [
  { name: "HTML/CSS", icon: BiCode },
  { name: "JavaScript", icon: DiJavascript },
  { name: "TypeScript", icon: BiLogoTypescript },
  { name: "React", icon: GrReactjs },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Nest.js", icon: SiNestjs },
  { name: "Tailwind CSS", icon: RiTailwindCssFill },
  { name: "MongoDB", icon: DiMongodb },
  { name: "PostgreSQL", icon: DiPostgresql },
  { name: "Firebase", icon: DiFirebase },
  { name: "Hono.js", icon: GiFlame },
  { name: "MUI", icon: SiMui },
  { name: "Shadcn", icon: SiShadcnui },
  { name: "Stripe", icon: BsStripe },
];

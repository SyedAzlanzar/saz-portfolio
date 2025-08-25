import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "LP1X2A3B",
    name: "RecruitPro",
    tagline:
      "Revolutionize recruitment with instant LinkedIn profile analysis and smart candidate management.",
    description:
      "Empower HR teams with our LinkedIn Profile Extension. This Chrome tool automatically extracts candidate details from LinkedIn profiles, streamlining the recruitment process. HR professionals can quickly evaluate profiles, assign positions, and update contact statuses. The extension prompts for reasons when candidates aren't contacted, ensuring thorough record-keeping. An admin dashboard provides valuable analytics, helping optimize hiring strategies and team performance. Transform your recruitment workflow with this efficient, data-driven solution.",
    image: "/assets/linkedin-thumbnail.png",
    github: "https://github.com/SyedAzlanzar",
    appearance: "Private",
    videoUrl: "/assets/linkedin-extension.webm",
    techStack: [
      "Manifest 3",
      "React",
      "Vite",
      "Typescript",
      "Node.js",
      "Hono.js",
      "Mongodb",
    ],
  },
  {
    id: "VT4Y5Z6C",
    name: "Virtual Tourism Manager",
    tagline:
      "Empower virtual tourism with seamless content management. Shape unforgettable travel experiences from behind the scenes.",
    description:
      "The Virtual Tourism Manager is a powerful admin dashboard that drives a mobile application designed to provide virtual assistance to tourists. This comprehensive management system allows administrators to curate and control various aspects of the tourist experience, including tours, tour stops, amenities, and recommended items to bring. By centralizing the management of these elements, the dashboard ensures that the mobile app always presents up-to-date and relevant information to users, enhancing their travel experience and making virtual tourism more engaging and informative.",
    image: "/assets/mauritius-thumbnail.png",
    github: "https://github.com/SyedAzlanzar",
    appearance: "Private",
    videoUrl: "/assets/mauritius.webm",
    techStack: ["Next.js", "Nest.js", "MUI", "Typescript", "Axios"],
  },
  {
    id: "EM1G2H3I",
    name: "Election Matching System",
    tagline:
      "Connect voters to their ideal candidates. Empower democracy through data-driven matchmaking and insightful election analytics.",
    description:
      "The Election Matching System revolutionizes the voting process by aligning voters with candidates based on shared interests and concerns. This innovative platform empowers the public to make informed decisions by matching their specific needs and problems with election representatives who address those issues. By creating a direct link between voter concerns and candidate platforms, the system provides valuable analytics for overall election trends. Features include profile matching, event notifications for upcoming elections via calendar integration, and authentic analytics powered by Google Analytics. This comprehensive solution enhances democratic engagement and ensures more representative election outcomes.",
    image: "/assets/voterconnect-thumbnail.png",
    github: "https://github.com/SyedAzlanzar",
    appearance: "Private",
    videoUrl: "/assets/voterconnect.webm",
    techStack: ["Next.js", "Nest.js", "MUI", "Typescript", "Axios"],
  },
  {
    id: "YB4J5K6L",
    name: "YBudget Calculation Tools",
    tagline:
      "Master your finances with precision tools and expert guidance. YBudget: Your all-in-one solution for smart financial planning and decision-making.",
    description:
      "YBudget is a comprehensive financial planning platform that empowers users to make informed decisions about their money. This web application offers a suite of essential calculators, including Income Tax, Compound Interest, Systematic Withdrawal, Mortgage, and Debt Paydown tools. By providing these powerful calculators in one place, YBudget enables users to study their savings, plan for the future, and optimize their financial strategies. The platform is enriched with informative blogs and user guidelines, powered by a Strapi backend, ensuring users have access to up-to-date financial advice and best practices for utilizing the tools effectively.",
    image: "/assets/ybudget-thumbnail.png",
    github: "https://github.com/SyedAzlanzar",
    demo: "https://ybudget.com",
    appearance: "Private",
    videoUrl: "/assets/ybudget.webm",
    techStack: ["Next.js", "Shadcn", "Typescript", "Strapi"],
  },
];

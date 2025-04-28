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
    id: "BE7D8E9F",
    name: "BidSync AI",
    tagline:
      "AI-powered bidding assistant for freelance success. Streamline proposals, track performance, and close more deals with ease.",
    description:
      "BidSync AI is a powerful browser extension designed to revolutionize the freelance bidding process on platforms like Upwork and Fiverr. Leveraging OpenAI's GPT-4 model, it generates tailored project proposals based on job descriptions, techstack requirements, and bidder inputs. The extension streamlines workflow by tracking applied and unapplied jobs, maintaining bid history, and facilitating seamless communication between sales team shifts. With its robust admin dashboard built on Next.js 14, React Query, Redux Toolkit, and Tailwind CSS, Bidding Expert AI provides comprehensive analytics and performance metrics, empowering sales teams to optimize their bidding strategies and boost success rates.",
    image: "/assets/zen-ai-extension.png",
    github: "https://github.com/SyedAzlanzar",
    appearance: "Private",
    videoUrl: "/assets/bidding.mp4",
    techStack: [
      "React.js",
      "Vite",
      "Shadcn",
      "Typescript",
      "Hono.js",
      "Mongodb",
      "Manifest 3",
      "OpenAi API",
    ],
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
  {
    id: "HI6434",
    name: "Portfolio",
    tagline: "Showcasing expertise with style and innovation.",
    description:
      "A modern and responsive portfolio built with Next.js 15, React 19, ShadCN for enhanced UI design, Tailwind CSS for styling, and TypeScript for type-safe development. This project highlights a seamless blend of cutting-edge technologies to deliver an elegant user experience.",
    image: "/assets/portfolio-thumbnail.png",
    github: "https://github.com/SyedAzlanzar",
    demo: "https://saz-portfolio.vercel.app",
    appearance: "Private",
    videoUrl: "/assets/saz-portfolio.mp4",
    techStack: ["Next.js", "Shadcn Ui", "Typescript", "Next 15", "React 19"],
  },
];

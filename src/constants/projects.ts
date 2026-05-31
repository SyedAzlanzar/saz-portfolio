import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "PRV7R4G1",
    name: "PrivRAG",
    tagline:
      "Privacy-first, multi-tenant AI RAG platform with automated PII sanitization.",
    description:
      "PrivRAG is a robust, privacy-preserving Retrieval-Augmented Generation (RAG) platform built for multi-tenant enterprise environments. Developed as a Master's Thesis project, it ensures strict logical data isolation across different organizations using ChromaDB. The system leverages a custom hybrid NLP masking pipeline (Microsoft Presidio + heuristics) to automatically detect and redact sensitive PII before any data is sent to the Google Gemini LLM. Featuring a Next.js frontend, a NestJS API gateway backed by MongoDB, and a high-performance Python AI microservice, PrivRAG guarantees that data remains secure and compliant without sacrificing AI reasoning capabilities.",
    image: "/assets/privrag.png",
    github: "https://github.com/SyedAzlanzar/PrivRag-Backend",
    appearance: "Public",
    videoUrl: "",
    techStack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Python",
      "FastAPI",
      "ChromaDB",
      "Google Gemini"
    ],
  },
  {
    id: "CL4V9E2X",
    name: "CoverCraft",
    tagline:
      "Generate tailored cover letters instantly while applying for jobs on LinkedIn.",
    description:
      "CoverCraft is a Chrome Extension designed to simplify the job application process. Focused on LinkedIn job applications, it leverages AI to generate professional cover letters on the fly. No more wasting time formatting, downloading, or copy-pasting. This extension handles it all in a clean, ready-to-use layout. Built with NestJS and MongoDB on the backend, and powered by Python + Hugging Face models as the AI service, it provides a smooth and efficient workflow for applicants. A personal project born out of necessity, it may not be flawless, but it works, and it saves precious time.",
    image: "/assets/cover-craft.png",
    github: "https://github.com/SyedAzlanzar",
    appearance: "Private",
    videoUrl: "/assets/cover-craft.mp4",
    techStack: [
      "Manifest V3",
      "React",
      "Vite",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Python",
      "OpenAI APIs"
    ],
  },
  {
    id: "VSC9K2M4",
    name: "Vector Space ML",
    tagline:
      "From-scratch mathematical implementations of core machine learning algorithms.",
    description:
      "This project features custom-built Python implementations of fundamental machine learning algorithms—K-Means, DBSCAN, and K-Nearest Neighbors (KNN)—developed without relying on high-level ML libraries. It includes an automated computer vision pipeline that maps image pixels into 3D RGB vector spaces for color-based image segmentation. Equipped with a scalable CLI architecture, the system processes n-dimensional synthetic datasets (2D, 3D, 5D) to prove algorithmic universality and executes rigorous classification benchmarks against complex scientific datasets like Breast Cancer and Iris.",
    image: "/assets/vectorspacingknn.png",
    github: "https://github.com/SyedAzlanzar/VectorSpace-Clustering-Classification",
    appearance: "Public",
    videoUrl: "",
    techStack: [
      "Python",
      "K-Means",
      "DBSCAN",
      "KNN",
      "Computer Vision",
      "CLI Architecture",
      "Mathematics",
      "Data Visualization"
    ],
  },
  {
    id: "affordable-housing-analysis",
    name: "Affordable Housing Analytics - Python",
    tagline: "Python data analysis of 30+ years Philadelphia housing trends",
    description: "Complete end-to-end Python data analysis and machine learning pipeline analyzing 484 affordable housing projects built in Philadelphia from 1994–2024. Used pandas for comprehensive data cleaning and exploratory analysis, tracking total units produced by fiscal year, project type (Rental/Homeownership/Special Needs), and top developers. Generated professional visualizations with seaborn/matplotlib showing production trends and accessibility growth. Built scikit-learn LogisticRegression classifier predicting project size categories (small/medium/large) achieving 75%+ accuracy on test set, demonstrating full ML workflow from preprocessing to evaluation.",
    image: "/assets/affordable-housing-analysis-python.jpg",
    github: "https://github.com/SyedAzlanzar/affordable-housing-analysis-python",
    appearance: "Public",
    videoUrl: "",
    techStack: [
      "Python",
      "pandas",
      "scikit-learn",
      "seaborn",
      "matplotlib"
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
    videoUrl: "/assets/mauritius.mp4",
    techStack: ["Next.js", "Nest.js", "MUI", "Typescript", "Axios"],
  },
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
    videoUrl: "/assets/linkedin-extension.mp4",
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
    id: "EM1G2H3I",
    name: "Election Matching System",
    tagline:
      "Connect voters to their ideal candidates. Empower democracy through data-driven matchmaking and insightful election analytics.",
    description:
      "The Election Matching System revolutionizes the voting process by aligning voters with candidates based on shared interests and concerns. This innovative platform empowers the public to make informed decisions by matching their specific needs and problems with election representatives who address those issues. By creating a direct link between voter concerns and candidate platforms, the system provides valuable analytics for overall election trends. Features include profile matching, event notifications for upcoming elections via calendar integration, and authentic analytics powered by Google Analytics. This comprehensive solution enhances democratic engagement and ensures more representative election outcomes.",
    image: "/assets/voterconnect-thumbnail.png",
    github: "https://github.com/SyedAzlanzar",
    appearance: "Private",
    videoUrl: "/assets/voterconnect.mp4",
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
    videoUrl: "/assets/ybudget.mp4",
    techStack: ["Next.js", "Shadcn", "Typescript", "Strapi"],
  },

];

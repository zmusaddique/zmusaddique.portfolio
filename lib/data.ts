import React from "react";
import { FaSearch } from "react-icons/fa";
import codechat from "@/public/codechat.png";
import retailtee from "@/public/retailtee.png";
import semSearch from "@/public/semSearch.png";
import { GiArchiveResearch } from "react-icons/gi";
import { MdOutlineAnimation } from "react-icons/md";
import { GoOrganization } from "react-icons/go";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Founder",
    company: "Matical",
    description:
      "An attempt to teach high school students in an active, engaging way. At the end, the one who learnt the most from this organization was myself.",
    icon: React.createElement(GoOrganization),
    date: "2020-2021",
  },
  {
    title: "Motion Designer",
    company: "Teachman",
    description:
      "I worked on creating animated videos using blender/AE. I also switched to creating content/study materials.",
    icon: React.createElement(MdOutlineAnimation),
    date: "2021 - 2022",
  },
  {
    title: "Data Science Research Intern",
    company: "AI4SEES",
    description:
      "Replicated results for Multivariate Time-Series Anomaly Detection (MTAD) leveraging systems like Graph Neural Nets, GAT’s and GRU’s for implementation.",
    icon: React.createElement(GiArchiveResearch),
    date: "2023 Sep - 2023 Oct",
  },
  {
    title: "Looking for a role in LLM/RAG space!",
    company: "Preferrably a startup",
    description:
      "In a place involving in solving challenging problems and immense learning",
    icon: React.createElement(FaSearch),
    date: "present",
  },
] as const;

export const projectsData = [
  {
    title: "Code Chat",
    description:
      "Query, and understand code present in GitHub repositories with a powerful RAG pipeline, making coding intuitive and efficient.",
    tags: ["LlamaIndex", "Streamlit", "Python", "ChromaDB"],
    imageUrl: codechat,
    projectUrl: "https://github.com/zmusaddique/codechat",
  },
  {
    title: "RetailTee",
    description:
      "Merges language and data, allowing users to effortlessly query a remote MySQL database with natural language.",
    tags: ["Langchain", "Streamlit", "SQL", "VectorDB", "Python"],
    imageUrl: retailtee,
    projectUrl: "https://github.com/zmusaddique/palm-for-clothing-store",
  },
  {
    title: "Semantic search",
    description:
      "Improving online shopping using advanced language processing. Faiss and Google Palm LLM deliver personalized product suggestions.",
    tags: ["Langchain", "Palm LLM", "Pandas"],
    imageUrl: semSearch,
    projectUrl: "https://github.com/zmusaddique/semantic-search",
  },
] as const;

export const skillsData = [
  "LlamaIndex",
  "Langchain",
  "Streamlit",
  "Machine Learning",
  "Deep learning",
  "Python",
  "PyTorch",
  "Flask",
  "FastAPI",
  "MySQL",
  "Javascript",
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind",
] as const;

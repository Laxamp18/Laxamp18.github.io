export type LearningStatus = "Exploring" | "Learning" | "Developing" | "Academic foundation";

export const profile = {
  name: "Laxam Poudel",
  location: "Chitwan, Nepal",
  role: "CSIT undergraduate · curious developer",
  github: "https://github.com/Laxamp18",
  introduction:
    "A curious developer interested in how technology works beneath the surface.",
  story:
    "I'm fascinated by how much exists beneath the surface of technology. Every layer reveals another question, another system to understand, and another possibility to explore. In a field that never stops evolving, I want to keep learning, experimenting, and discovering where I can contribute.",
};

export const interests = [
  {
    id: "systems",
    name: "Computer Systems",
    short: "Systems",
    status: "Academic foundation" as LearningStatus,
    description:
      "Understanding the layers beneath software: digital logic, computer organization, operating systems and how hardware and software interact.",
    concepts: ["Digital logic", "Computer organization", "Operating systems", "Low-level programming"],
  },
  {
    id: "algorithms",
    name: "Algorithms & Data Structures",
    short: "Algorithms",
    status: "Developing" as LearningStatus,
    description:
      "Building problem-solving foundations through data structures, algorithmic thinking, complexity and implementation practice.",
    concepts: ["Problem solving", "Data structures", "Algorithms", "Complexity"],
  },
  {
    id: "ai",
    name: "AI & Machine Learning",
    short: "AI / ML",
    status: "Exploring" as LearningStatus,
    description:
      "Exploring how intelligent systems learn from data, how machine-learning methods work and where AI can be applied responsibly.",
    concepts: ["Python foundations", "Data", "Machine learning", "AI-assisted development"],
  },
  {
    id: "web",
    name: "Web Development",
    short: "Web",
    status: "Learning" as LearningStatus,
    description:
      "Learning how the web works, from JavaScript fundamentals to component-based interfaces and full-stack application concepts.",
    concepts: ["JavaScript", "React", "Next.js", "Web fundamentals"],
  },
  {
    id: "research",
    name: "Research & Experiments",
    short: "Research",
    status: "Exploring" as LearningStatus,
    description:
      "Following questions across computing, documenting experiments and connecting ideas from different areas of technology.",
    concepts: ["Reading notes", "Small experiments", "Technical questions", "Emerging technology"],
  },
];

export const foundations = [
  { name: "C", status: "Intermediate", note: "Programming foundation" },
  { name: "Python", status: "Fundamentals", note: "Core language concepts" },
  { name: "JavaScript", status: "Learning", note: "Language fundamentals" },
  { name: "React / Next.js", status: "Learning", note: "Modern web development" },
  { name: "Algorithms & Data Structures", status: "Developing", note: "Problem-solving practice" },
  { name: "Computer Systems", status: "Academic foundation", note: "CSIT coursework" },
];

export const milestones = [
  {
    title: "Started exploring web development",
    detail: "Beginning to understand how websites are structured and how interactive web experiences are built.",
  },
  {
    title: "Began exploring AI and machine learning",
    detail: "Starting to investigate intelligent systems, machine-learning concepts and practical applications.",
  },
  {
    title: "Started studying Computer Science / CSIT",
    detail: "Beginning an undergraduate path focused on computing fundamentals and the systems behind software.",
  },
];

// Add projects only when their title, status, contribution and links are verified.
// Keep AI-assisted experiments separate from independently developed projects.
export const projects: Array<{
  title: string;
  summary: string;
  category: "AI-assisted experiment" | "Independent project";
  status: "Experiment" | "In progress" | "Completed" | "Archived";
  technologies: string[];
  contribution: string;
  github?: string;
  demo?: string;
}> = [];

// Add Engineering Log entries as Markdown/MDX files when ready to publish.
export const engineeringLog: Array<{
  title: string;
  category: "Research notebook" | "Developer journal" | "Experimental lab";
  date: string;
  summary: string;
  href: string;
}> = [];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Plan4Salary",
    description:
      "A personal budgeting application designed to help users plan their salary, manage expenses, and understand their monthly finances.",
    technologies: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/TruemanMbn/plan4salary",
  },
  {
    title: "Password Generator",
    description:
      "A secure password generator that creates strong, customizable passwords using the browser's cryptographically secure random API, with automated tests.",
    technologies: [
      "TypeScript",
      "Vite",
      "Web Crypto API",
      "HTML",
      "CSS",
      "Vitest",
    ],
    github: "https://github.com/TruemanMbn/Password-Generator",
    demo: "https://password-generator-sepia-two.vercel.app/",
  },
];
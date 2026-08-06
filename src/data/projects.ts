export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "ChurchPulse",
    description:
      "A full-stack church management system for member registration, ministry management, dashboards, reporting, and secure JWT authentication.",
    technologies: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "Entity Framework",
      "JWT",
    ],
    github: "https://github.com/TruemanMbn/ChurchPulse",
  },

  {
    title: "Penalty Shootout Game",
    description:
      "A responsive football penalty shootout game built with TypeScript and modern frontend tooling.",
    technologies: [
      "TypeScript",
      "HTML",
      "CSS",
      "Vite",
    ],
    github: "https://github.com/TruemanMbn/penalty-shootout-game",
  },

  {
    title: "Robot World API",
    description:
      "REST API for controlling robots inside a virtual world with obstacle management and persistent storage.",
    technologies: [
      "Java",
      "Javalin",
      "SQLite",
      "REST API",
    ],
    github: "https://github.com/TruemanMbn",
  },

  {
    title: "Spam Detection",
    description:
      "Machine learning project that classifies spam messages using Python and data analysis techniques.",
    technologies: [
      "Python",
      "Machine Learning",
      "Pandas",
    ],
    github: "https://github.com/TruemanMbn",
  },

  {
    title: "Data Engineering Pipeline",
    description:
      "Data ingestion and processing pipeline using Apache Beam, Docker, PostgreSQL and Redpanda.",
    technologies: [
      "Python",
      "Apache Beam",
      "Docker",
      "PostgreSQL",
      "Redpanda",
    ],
    github: "https://github.com/TruemanMbn",
  },
];
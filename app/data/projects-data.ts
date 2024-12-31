export interface Project {
  slug: string;
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  link: string;
  github: string;
  workflow: string;
  challenges: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    slug: "we-design-studio",
    title: "we design studio",
    description: "a landing page for interior design studio based in tel aviv",
    mainImage: "/we-desgin-studio-main-page.png",
    images: ["/we-desgin-studio-main-page.png"],
    link: "https://wedesignstudio.com",
    github: "https://github.com/we-design-studio",
    workflow:
      "The workflow for this project involved designing a logo and colors for the newly design studio, creating a landing page.",
    challenges:
      "Some key challenges faced were the need to create a modern and stylish design that would appeal to the target audience, as well as ensuring the design was responsive and user-friendly.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    slug: "platinum-aviation",
    title: "platinum aviation",
    description: "a website for aviation company based in ben gurion airport",
    mainImage: "/platinum-aviation-main-page.png",
    images: ["/platinum-aviation-main-page.png"],
    link: "https://airportfastrack.com",
    github: "https://github.com/platinum-aviation",
    workflow:
      "For this project, the workflow consisted of creating a lot of components and pages, and then connecting them together to create a functional website.",
    challenges:
      "The main challenges encountered were the need to create a modern and stylish design that would appeal to the target audience, as well as ensuring the design was responsive and user-friendly.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    slug: "omar-wood-shop",
    title: "omar wood shop",
    description: "a landing page for a wood shop based in israel",
    mainImage: "/omar-wood-shop-main-page.png",
    images: ["/omar-wood-shop-main-page.png"],
    link: "https://homarwoodshop.co.il",
    github: "https://github.com/omar-wood-shop",
    workflow:
      "The workflow for this project involved talking with omar about his visions and the relavent message he wanted to convey to his customers, and then creating a landing page that would be a good representation of his business.",
    challenges:
      "The main challenges encountered were the need to create a modern and stylish design that would appeal to the target audience, as well as ensuring the design was responsive and user-friendly.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
];

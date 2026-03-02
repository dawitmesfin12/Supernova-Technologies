import type { Stat } from "./stats";

export interface Platform {
  name: string;
  url: string;
  description: string;
}

export const platforms: Platform[] = [
  {
    name: "Upwork",
    url: "https://www.upwork.com",
    description:
      "The world's largest freelancing marketplace. We take on web, mobile, and full-stack projects from clients across North America, Europe, and the Middle East.",
  },
  {
    name: "Toptal",
    url: "https://www.toptal.com",
    description:
      "An exclusive network of the top 3% of freelance talent. Our senior engineers are vetted Toptal members delivering high-stakes projects for global startups and enterprises.",
  },
  {
    name: "Indeed",
    url: "https://www.indeed.com",
    description:
      "We source contract and remote engineering roles posted by international companies, placing our developers in long-term positions with competitive compensation.",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com",
    description:
      "We connect with hiring managers and CTOs directly, securing project-based and staff-augmentation contracts for our team through professional outreach.",
  },
  {
    name: "Fiverr Pro",
    url: "https://www.fiverr.com/pro",
    description:
      "Hand-vetted professionals delivering premium services. We offer fixed-scope web development, UI/UX design, and consulting engagements through Fiverr's Pro tier.",
  },
  {
    name: "Freelancer.com",
    url: "https://www.freelancer.com",
    description:
      "A global marketplace where we compete on and win software projects ranging from MVPs and prototypes to full production systems for international clients.",
  },
];

export const outsourcingStats: Stat[] = [
  { label: "International projects delivered", target: 8, suffix: "+" },
  { label: "Platforms active on", target: 6, suffix: "" },
  { label: "Countries served", target: 5, suffix: "+" },
  { label: "Client satisfaction", target: 100, suffix: "%" },
];

export interface Stat {
  label: string;
  target: number;
  suffix: string;
}

export const stats: Stat[] = [
  { label: "Years of experience", target: 6, suffix: "+" },
  { label: "Projects delivered", target: 40, suffix: "+" },
  { label: "Industries served", target: 17, suffix: "+" },
  { label: "Engineers on the team", target: 11, suffix: "" },
];

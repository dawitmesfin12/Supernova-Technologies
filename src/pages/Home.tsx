import type React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import StatsStrip from "../components/StatsStrip";
import Testimonials from "../components/Testimonials";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <Features />
      <Testimonials />
    </main>
  );
};

export default Home;


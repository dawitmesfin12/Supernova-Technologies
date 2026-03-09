import type React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
    </main>
  );
};

export default Home;


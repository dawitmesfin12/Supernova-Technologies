import type React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Industries from "../components/Industries";
import Testimonials from "../components/Testimonials";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Industries />
      <Testimonials />
    </main>
  );
};

export default Home;


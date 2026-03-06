import type React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Industries from "../components/Industries";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Industries />
    </main>
  );
};

export default Home;


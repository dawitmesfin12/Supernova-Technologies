import Hero from "../components/Hero";
import Features from "../components/Features";
import StatsStrip from "../components/StatsStrip";
import Outsourcing from "../components/Outsourcing";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <Features />
      <Outsourcing />
      <Testimonials />
    </main>
  );
};

export default Home;


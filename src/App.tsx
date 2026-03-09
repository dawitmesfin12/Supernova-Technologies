import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import HowWeWorkPage from "./pages/HowWeWorkPage";
import ContactPage from "./pages/ContactPage";
import DevelopersPage from "./pages/DevelopersPage";

function App() {
  return (
    <BrowserRouter>
      <div className="nv-app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/how-we-work" element={<HowWeWorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/talk-to-us" element={<ContactPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom"; // <--- Import Alat Routing

// Import Halaman-halaman kita
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WarungKopi from "./components/WarungKopi";

// Kita bikin komponen "Home" (Isi Portofolio Asli Bro)
const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

// --- STRUKTUR UTAMA ---
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Jalur 1: Halaman Utama (Portofolio) */}
        <Route path="/" element={<Home />} />

        {/* Jalur 2: Halaman Warung Kopi */}
        <Route path="/warkop" element={<WarungKopi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

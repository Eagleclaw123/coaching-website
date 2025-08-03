import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

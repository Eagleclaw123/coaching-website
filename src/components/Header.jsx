import { motion } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize the gradient when component mounts
    const initializeGradient = async () => {
      try {
        // Import the gradient class
        const { Gradient } = await import("../gradient.js");

        // Initialize gradient
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
      } catch (error) {
        console.error("Error initializing gradient:", error);
      }
    };

    initializeGradient();
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Vision", href: "#vision" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 overflow-hidden"
      style={{ height: "80px" }}
    >
      {/* Gradient Canvas Background */}
      <canvas
        id="gradient-canvas"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          width: "200%",
          height: "160px",
          // transform: "rotate(-10deg)",
          position: "absolute",
          top: "-40px",
          left: "-50%",
          zIndex: -1,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 relative z-10"
          >
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">EduVibe</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-blue-200 font-medium transition-colors duration-300 relative z-10"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-opacity-30 transition-all duration-300 relative z-10"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white relative z-10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white border-opacity-20 bg-black bg-opacity-20 backdrop-blur-sm relative z-10"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-white hover:text-blue-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-30 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

import { motion } from "framer-motion";
import {
  BookOpen,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Vision", href: "#vision" },
    { name: "Contact", href: "#contact" },
    { name: "Admissions", href: "#" },
    { name: "Results", href: "#" },
  ];

  const courses = [
    { name: "JEE Main & Advanced", href: "#" },
    { name: "NEET Preparation", href: "#" },
    { name: "Class 10th CBSE", href: "#" },
    { name: "Class 12th Science", href: "#" },
    { name: "Foundation Course", href: "#" },
    { name: "Crash Course", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-5 -ml-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-pink-500 to-red-500 rounded-full opacity-5 -mr-24 -mb-24" />
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-3" /> */}

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold gradient-text">
                  RaviTejaSite
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Empowering students to achieve their dreams through quality
                education, innovative teaching methods, and personalized support
                since 2015.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    123 Education Street, Knowledge City
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-gray-300">info@eduvibe.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Courses */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6">Our Courses</h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <motion.li
                    key={course.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={course.href}
                      className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                    >
                      {course.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold">Stay Connected</h3>

              {/* Newsletter */}
              <div>
                <p className="text-gray-300 mb-4">
                  Subscribe to get updates on new courses and educational tips.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-r-xl hover:shadow-lg transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-300 mb-4">Follow us on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className={`w-10 h-10 bg-white bg-opacity-10 rounded-xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-opacity-20`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 border-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-300 text-center md:text-left"
              >
                <p>
                  &copy; 2024 RaviTejaSite. All rights reserved. | Privacy
                  Policy | Terms of Service
                </p>
              </motion.div>

              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ArrowUp className="w-6 h-6 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Users2 } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "We focus on your specific goals and create personalized learning paths to achieve them.",
    },
    {
      icon: Heart,
      title: "Passionate Teaching",
      description:
        "Our educators are passionate about teaching and committed to your success.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Methods",
      description:
        "We use cutting-edge teaching methods and technology to enhance learning.",
    },
    {
      icon: Users2,
      title: "Community Support",
      description:
        "Join a supportive community of learners and mentors who help each other grow.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">EduVibe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're more than just a coaching institute. We're your partners in
            success, dedicated to transforming dreams into achievements through
            personalized education and unwavering support.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2015, EduVibe started with a simple mission: to make
              quality education accessible to everyone. What began as a small
              coaching center has now grown into a leading educational
              institution that has helped over 10,000 students achieve their
              dreams.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our approach combines traditional teaching excellence with modern
              technology, creating an environment where students don't just
              learn—they thrive. We believe that every student has unique
              potential, and our job is to unlock it.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <div className="text-3xl font-bold gradient-text">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <div className="text-3xl font-bold gradient-text">25+</div>
                <div className="text-sm text-gray-600">Course Programs</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20" />
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full opacity-10" />

              {/* Center Content */}
              <div className="text-center z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users2 className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold gradient-text">10,000+</h4>
                <p className="text-gray-600">Happy Students</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

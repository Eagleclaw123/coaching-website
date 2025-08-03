import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Heart,
  Zap,
  Users,
  Trophy,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const Vision = () => {
  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from teaching to student support.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description:
        "We believe education should be accessible to all, regardless of background.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously innovate our teaching methods to stay ahead of the curve.",
    },
    {
      icon: Trophy,
      title: "Success",
      description:
        "Your success is our success. We celebrate every achievement together.",
    },
  ];

  return (
    <section id="vision" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Our <span className="gradient-text">Vision & Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Driven by purpose, guided by values, and committed to transforming
            lives through education.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 h-full relative overflow-hidden">
              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-200 to-red-200 rounded-full opacity-20 -ml-12 -mb-12" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the leading educational institution that empowers
                  students to achieve their highest potential and become
                  confident, capable individuals who contribute positively to
                  society. We envision a world where quality education is
                  accessible to all, and every student has the opportunity to
                  pursue their dreams.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-3xl p-8 h-full relative overflow-hidden">
              {/* Background Decorations */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 -ml-14 -mt-14" />
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 -mr-10 -mb-10" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To provide exceptional educational experiences through
                  innovative teaching methods, personalized attention, and
                  comprehensive support systems. We are committed to nurturing
                  not just academic excellence, but also character development,
                  critical thinking, and lifelong learning skills in our
                  students.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="gradient-text">Core Values</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -ml-20 -mt-20" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mb-16" />
          {/* <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white opacity-5 rounded-full -mr-16 -mb-16" /> */}
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full" /> */}

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-6 z-20"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Commitment to You
            </h3>
            <p className="text-xl text-white text-opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
              We promise to provide you with the best educational experience,
              personalized attention, and unwavering support throughout your
              learning journey. Your success is our priority, and we'll be with
              you every step of the way.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white text-opacity-80">
                  Support Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white text-opacity-80">
                  Dedicated Faculty
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-white text-opacity-80">
                  Learning Opportunities
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;

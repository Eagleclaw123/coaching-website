import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Star,
  ArrowRight,
  BookOpen,
  Calculator,
  Atom,
  Globe,
} from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "JEE Main & Advanced",
      description:
        "Comprehensive preparation for engineering entrance exams with expert faculty and proven strategies.",
      icon: Calculator,
      duration: "2 Years",
      students: "2.5K+",
      rating: 4.9,
      price: "₹1,20,000",
      features: [
        "Live Classes",
        "Mock Tests",
        "Doubt Sessions",
        "Study Material",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "NEET Preparation",
      description:
        "Medical entrance exam coaching with focus on Biology, Chemistry, and Physics fundamentals.",
      icon: Atom,
      duration: "2 Years",
      students: "1.8K+",
      rating: 4.8,
      price: "₹1,10,000",
      features: [
        "Expert Biology Faculty",
        "Lab Sessions",
        "Previous Papers",
        "Mentorship",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Class 10th CBSE",
      description:
        "Complete board exam preparation with conceptual clarity and exam-oriented practice.",
      icon: BookOpen,
      duration: "1 Year",
      students: "3.2K+",
      rating: 4.7,
      price: "₹45,000",
      features: [
        "All Subjects",
        "Board Pattern",
        "Regular Tests",
        "Parent Updates",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Class 12th Science",
      description:
        "Advanced level coaching for Physics, Chemistry, Mathematics with board and competitive focus.",
      icon: Globe,
      duration: "1 Year",
      students: "2.1K+",
      rating: 4.8,
      price: "₹65,000",
      features: [
        "PCM Focus",
        "Practical Labs",
        "Career Guidance",
        "College Prep",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Foundation Course",
      description:
        "Strong foundation building for classes 8th & 9th students preparing for competitive exams.",
      icon: BookOpen,
      duration: "1 Year",
      students: "1.5K+",
      rating: 4.6,
      price: "₹35,000",
      features: [
        "Concept Building",
        "Fun Learning",
        "Regular Assessment",
        "Skill Development",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Crash Course",
      description:
        "Intensive short-term courses for last-minute preparation and quick revision.",
      icon: Clock,
      duration: "3 Months",
      students: "800+",
      rating: 4.5,
      price: "₹25,000",
      features: [
        "Quick Revision",
        "Important Topics",
        "Mock Tests",
        "Doubt Clearing",
      ],
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      id="courses"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
    >
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
            Our <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of courses designed to help you
            excel in your academic journey and achieve your career goals.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${course.gradient} p-6 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-10 rounded-full -ml-8 -mb-8" />

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-4">
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-white text-opacity-90 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Stats */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">
                      {course.rating}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    What's Included:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold gradient-text">
                      {course.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">/ year</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${course.gradient} text-white px-6 py-2 rounded-full font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <span>Enroll</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Can't find the right course? We offer customized programs too!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us for Custom Programs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full"
            >
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">
                #1 Coaching Institute
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Transform Your
              <span className="gradient-text block">Future Today</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Join thousands of students who've achieved their dreams with our
              expert coaching and personalized learning approach.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex space-x-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-600">Expert Teachers</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px]"
          >
            {/* Main Achievement Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white rounded-3xl shadow-2xl p-8 relative z-10 max-w-sm"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Premium Courses</h3>
                  <p className="text-gray-600">Expert-led training</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Student Stats Card */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute top-16 -right-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 shadow-xl z-20"
            >
              <div className="text-center text-white">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">2.5K+</div>
                <div className="text-sm opacity-90">Active Students</div>
              </div>
            </motion.div>

            {/* Success Rate Card */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-64 -left-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-xl z-20"
            >
              <div className="text-center text-white">
                <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
            </motion.div>

            {/* Live Classes Card */}
            <motion.div
              animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute bottom-20 right-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-5 shadow-xl z-20"
            >
              <div className="text-center text-white">
                <Play className="w-7 h-7 mx-auto mb-2" />
                <div className="text-lg font-bold">Live</div>
                <div className="text-xs opacity-90">Classes</div>
              </div>
            </motion.div>

            {/* Expert Teachers Card */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, -3, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-8 left-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl p-5 shadow-xl z-20"
            >
              <div className="text-center text-white">
                <Star className="w-7 h-7 mx-auto mb-2 fill-current" />
                <div className="text-lg font-bold">50+</div>
                <div className="text-xs opacity-90">Expert Teachers</div>
              </div>
            </motion.div>

            {/* Notification Card */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="absolute top-4 left-8 bg-white rounded-xl p-4 shadow-lg border-l-4 border-green-500 z-30"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    New Achievement!
                  </p>
                  <p className="text-xs text-gray-600">
                    Rahul scored 98% in JEE
                  </p>
                </div>
              </div>
            </motion.div> */}

            {/* Enhanced Background Gradient Orbs */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-48 h-48 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-15 blur-3xl" />
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full opacity-10 blur-2xl" />
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full opacity-12 blur-2xl" />

            {/* Floating Particles */}
            <motion.div
              animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -80, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -60, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
              className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

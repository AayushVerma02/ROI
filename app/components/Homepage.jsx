"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120
    }
  }
};

export default function LandingPage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col bg-cover bg-center text-white"
      style={{ backgroundImage: 'url("/images/background.jpg")' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10 min-h-screen flex flex-col backdrop-blur-2xl bg-blue-900/80 shadow-2xl border border-blue-600/50"
      >
        <motion.nav
          className="flex items-center justify-between px-8 py-5"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
          >
            <img src="/images/logo.png" alt="logo" className="w-[100px] ml-8" />
          </motion.div>
          
          <ul className="hidden md:flex space-x-6 text-lg">
            {['Home', 'How It Works', 'Calculator', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hover:text-pink-500 transition duration-300"
              >
                <a href="#">{item}</a>
              </motion.li>
            ))}
          </ul>
          
          <motion.a
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(236,72,153,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full font-semibold shadow-lg"
          >
            Join Now
          </motion.a>
        </motion.nav>

        <motion.div
          className="flex-grow flex items-center justify-center p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row items-center w-full max-w-7xl">
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left space-y-8"
              variants={containerVariants}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-extrabold leading-tight"
                variants={childVariants}
              >
                <motion.span
                  className="block bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                >
                  Love is an Investment.
                </motion.span>
                <motion.span
                  className="block mt-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Know Your ROI.
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-gray-300 text-xl max-w-xl mx-auto md:mx-0"
                variants={childVariants}
              >
                Calculate financial outcomes of relationships with precision. 
                Analyze dowry, alimony, and long-term commitments through 
                our advanced ROI calculator.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
                variants={childVariants}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 0px 25px rgba(236,72,153,0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  Calculate Now
                </motion.button>

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 0px 25px rgba(255,255,255,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-600 hover:border-pink-500 bg-gray-900/50 hover:bg-gray-800/70 px-8 py-4 rounded-full font-bold text-lg shadow-xl"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
              variants={containerVariants}
            >
              <motion.div
                className="relative group w-72 h-96 mx-4"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-3xl shadow-2xl transform-gpu transition-all duration-500 group-hover:scale-105"
                  variants={{
                    rest: { rotate: -3 },
                    hover: { rotate: 3 }
                  }}
                />
                
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-3xl border border-gray-700/50 shadow-2xl"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.02 }
                  }}
                >
                  <img
                    src="/images/bride.png"
                    alt="Bride"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ type: "spring" }}
                  >
                    <span className="text-xl font-bold text-pink-400">ROI: Alimony</span>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative group w-72 h-96 mx-4"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl shadow-2xl transform-gpu transition-all duration-500 group-hover:scale-105"
                  variants={{
                    rest: { rotate: 3 },
                    hover: { rotate: -3 }
                  }}
                />
                
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-3xl border border-gray-700/50 shadow-2xl"
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.02 }
                  }}
                >
                  <img
                    src="/images/groom.png"
                    alt="Groom"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg"
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ type: "spring", delay: 0.1 }}
                  >
                    <span className="text-xl font-bold text-blue-400">ROI: Dowry</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Glowing Arrow */}
        <motion.div
          className="absolute bottom-32 w-full text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.div
            className="mx-auto w-12 h-12 flex items-center justify-center"
            animate={{
              y: [0, 20, 0],
              opacity: [1, 0.5, 1],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-pink-400 drop-shadow-glow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Join Now Button with Subheading */}
        <motion.div
          className="absolute bottom-8 w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0px 0px 25px rgba(236,72,153,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl flex items-center gap-2 mx-auto border-2 border-transparent hover:border-pink-300 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Join Now
          </motion.button>

          <motion.p
            className="mt-4 text-gray-300 text-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Start your investment relationship journey now.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
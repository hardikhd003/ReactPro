import { motion } from "framer-motion"
import astronaut from "../assets/astronaut.png"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 uppercase tracking-[6px] mb-4">
            Space Exploration
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Journey
            <span className="text-purple-400"> Beyond </span>
            The Stars
          </h1>

          <p className="text-gray-300 leading-relaxed mb-8">
            Experience futuristic animations, interactive
            timelines, and immersive visuals inspired by
            deep space exploration.
          </p>

          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30">
            Explore Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute inset-0 flex items-center justify-center"
>
  <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-purple-500/20 rounded-full" />
</motion.div>

<motion.div
  animate={{ rotate: -360 }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute inset-0 flex items-center justify-center"
>
  <div className="w-[250px] h-[250px] md:w-[420px] md:h-[420px] border border-pink-500/20 rounded-full" />
</motion.div>

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl opacity-30 absolute inset-0"
            />

            <img
              src={astronaut}
              alt="astronaut"
              className="relative z-10 w-[280px] md:w-[420px] object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.7)]"
            />

          </div>
        </motion.div>

      </div>

    </section>
  )
}

export default Hero
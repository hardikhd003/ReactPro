import { motion } from "framer-motion"

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] border border-purple-500/20 rounded-full top-[-100px] left-[-100px]"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[700px] h-[700px] border border-pink-500/10 rounded-full bottom-[-200px] right-[-200px]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0618] via-[#05010f] to-black" />

    </div>
  )
}

export default BackgroundEffects
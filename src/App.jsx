import Navbar from "./components/Navbar"
import BackgroundEffects from "./components/BackgroundEffects"
import Hero from "./sections/Hero"
import Timeline from "./sections/Timeline"
import Gallery from "./sections/Gallery"
import Footer from "./components/Footer"
import { motion } from "framer-motion"

function App() {
  return (
   
    <motion.div
      className="relative"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}>
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Timeline />
      <Gallery />
      <Footer />
      </motion.div>
    
  )
}

export default App
import { motion } from "framer-motion"

const images = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
]

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen px-6 py-24">

      <div className="text-center mb-14">

        <p className="text-purple-400 uppercase tracking-[6px] mb-4">
          Interactive Showcase
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Hover Gallery
        </h2>

      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              rotate: index % 2 === 0 ? 2 : -2,
            }}
            transition={{
              duration: 0.4,
            }}
            className="relative overflow-hidden rounded-3xl group cursor-pointer hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]"
          >

            <img
              src={image}
              alt="gallery"
              className="w-full h-[300px] md:h-[350px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />

            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold">
                Future Vision
              </h3>

              <p className="text-gray-300">
                Interactive exploration experience
              </p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default Gallery
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const timelineData = [
  {
    title: "Registrations Open",
    date: "July 04, 2025",
  },
  {
    title: "Idea Submission",
    date: "July 08, 2025",
  },
  {
    title: "Mentor Session",
    date: "July 10, 2025",
  },
  {
    title: "Prototype Build",
    date: "July 12, 2025",
  },
  {
    title: "Final Presentation",
    date: "July 16, 2025",
  },
]

const Timeline = () => {
  return (
    <section id="timeline" className="min-h-screen flex flex-col items-center justify-center px-6 py-20">

      <p className="text-purple-400 uppercase tracking-[6px] mb-4">
        Hackathon Schedule
      </p>

      <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
        Interactive Timeline
      </h2>

      <div className="w-full max-w-6xl">

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
        >

          {timelineData.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 h-[250px] flex flex-col justify-center hover:scale-105 transition duration-300">

                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6 flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.date}
                </p>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  )
}

export default Timeline
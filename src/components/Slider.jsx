import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import img1 from "../SliderImages/graduation-celebration.png"
import img2 from "../SliderImages/modern-College-Campus.png"
import img3 from "../SliderImages/modern-library-study.png"
import img4 from "../SliderImages/placeholder-pi1vn.png"

const slides = [
  {
    image: img1,
    title: "Welcome to BlueCrest College",
    subtitle: "Where Excellence Meets Opportunity",
  },
  {
    image: img2,
    title: "Academic Excellence",
    subtitle: "Discover Your Potential Through Learning",
  },
  {
    image: img3,
    title: "Vibrant Campus Life",
    subtitle: "Build Lifelong Connections and Memories",
  },
  {
    image: img4,
    title: "Your Future Starts Here",
    subtitle: "Join Our Community of Achievers",
  },
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="mt-20 text-white w-full h-[600px] overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Blue overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="max-w-4xl px-4">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 rounded-md transition-colors">
                    Explore Programs
                  </button>
                  <button className="px-6 py-3 text-lg font-semibold border-2 border-white text-white hover:bg-white/10 bg-transparent rounded-md transition-colors">
                    Schedule a Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute hover:scale-105 left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-gray-300 text-white rounded-md transition-colors flex items-center justify-center"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute hover:scale-105 right-4 top-1/2 -translate-y-1/2 w-10 h-10  border border-gray-300 text-white rounded-md transition-colors flex items-center justify-center"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

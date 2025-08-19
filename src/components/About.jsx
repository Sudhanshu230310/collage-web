import { useState } from "react"
import i1 from "../AboutImages/1.png"
import i2 from "../AboutImages/2.png"
import i3 from "../AboutImages/3.png"
import i4 from "../AboutImages/4.png"
import i5 from "../AboutImages/5.png"
import i6 from "../AboutImages/6.png"
import i7 from "../AboutImages/7.png"
import i8 from "../AboutImages/8.png"
import i9 from "../AboutImages/9.png"


const sampleImages = [
  i1,i2,i3,i4,i5,i6,i7,i8,i9,
]

export function CollageGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="grid grid-cols-3 gap-2 h-full p-4">
        {sampleImages.map((src, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
              index % 3 === 0 ? "row-span-2" : "row-span-1"
            } ${
              hoveredIndex === index
                ? "scale-105 z-10 shadow-xl"
                : hoveredIndex !== null
                ? "scale-95 opacity-70"
                : "scale-100"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={src || "/placeholder.svg"}
              alt={`Collage sample ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse" />
      <div className="absolute bottom-8 left-8 w-6 h-6 bg-primary/30 rounded-full animate-bounce" />
    </div>
  )
}

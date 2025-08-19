import { ArrowRight, Sparkles, Heart, Users } from "lucide-react"
import { CollageGrid } from "./About"

export default function HomePage() {
  return (
    <div className="min-h-screen py-10 bg-background">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="w-full lg:w-1/2 bg-card">
          <CollageGrid />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide uppercase">
                  Creative Studio
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                <span className="text-blue-600"> Unleash Your</span> Creativity with Our{" "}
                <span className="">Unique Collages</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your memories into stunning visual art. Our innovative collage
                tools help you create personalized masterpieces that tell your story in
                the most beautiful way.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <span>Preserve precious memories forever</span>
              </div>

              <div className="flex items-center gap-3 text-foreground">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                <span>AI-powered artistic enhancements</span>
              </div>

              <div className="flex items-center gap-3 text-foreground">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-secondary" />
                </div>
                <span>Share with family and friends</span>
              </div>
            </div>
            <div className="space-y-4">
              <button className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-2xl hover:scale-105 transition-all duration-100 text-lg">Get Started</button>

              <p className="text-sm text-muted-foreground">
                Join over 50,000 creators who trust us with their memories
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

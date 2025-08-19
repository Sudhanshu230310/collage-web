import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const footerElement = document.getElementById("footer")
    if (footerElement) {
      observer.observe(footerElement)
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer
        id="footer"
        className={`relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-t border-blue-200/50 overflow-hidden ${
          isVisible ? "footer-animate" : ""
        }`}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Floating Particles */}
        {/* <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div> */}

        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid md:grid-cols-4 gap-8">
            {/* College Info */}
            <div className={`space-y-6 ${isVisible ? "footer-item-animate" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  BlueCrest College
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed hover:text-gray-800 transition-colors duration-300">
                Empowering students to achieve their dreams through quality education, innovative programs, and
                comprehensive support services that shape tomorrow's leaders.
              </p>
              <div className="flex gap-4 pt-2">
                {[
                  { icon: Facebook, color: "hover:bg-blue-600" },
                  { icon: Twitter, color: "hover:bg-sky-500" },
                  { icon: Instagram, color: "hover:bg-pink-500" },
                  { icon: Linkedin, color: "hover:bg-blue-700" }
                ].map(({ icon: Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`p-2 bg-white rounded-xl shadow-md hover:shadow-lg text-gray-600 ${color} hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className={`${isVisible ? "footer-item-animate" : "opacity-0 translate-y-8"}`} style={{ animationDelay: "0.1s" }}>
              <h5 className="font-bold text-gray-800 mb-6 text-lg relative group">
                Quick Links
                <div className="absolute bottom-0 left-0 w-0 h-1 rounded-full transition-all duration-500 group-hover:w-full"></div>
              </h5>
              <ul className="space-y-4 text-sm">
                {["Academics", "Campus Life", "Admissions", "About Us", "Student Portal"].map((link, index) => (
                  <li key={link} className="transform transition-all duration-300 hover:translate-x-3">
                    <a
                      href={`#${link.toLowerCase().replace(" ", "")}`}
                      className="text-gray-600 hover:text-blue-600 transition-all duration-300 relative group flex items-center gap-2"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative">
                        {link}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Programs */}
            <div className={`${isVisible ? "footer-item-animate" : "opacity-0 translate-y-8"}`} style={{ animationDelay: "0.2s" }}>
              <h5 className="font-bold text-gray-800 mb-6 text-lg relative group">
                Academic Programs
                <div className="absolute bottom-0 left-0 w-0 h-1  rounded-full transition-all duration-500 group-hover:w-full"></div>
              </h5>
              <ul className="space-y-4 text-sm">
                {["Business Administration", "Computer Science", "Engineering", "Liberal Arts", "Health Sciences"].map(
                  (program, index) => (
                    <li key={program} className="transform transition-all duration-300 hover:translate-x-3">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-purple-600 transition-all duration-300 relative group flex items-center gap-2"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative">
                          {program}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact Information */}
            <div className={`${isVisible ? "footer-item-animate" : "opacity-0 translate-y-8"}`} style={{ animationDelay: "0.3s" }}>
              <h5 className="font-bold text-gray-800 mb-6 text-lg relative group">
                Contact Us
                <div className="absolute bottom-0 left-0 w-0 h-1  rounded-full transition-all duration-500 group-hover:w-full"></div>
              </h5>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4 group hover:bg-white/60 p-3 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    <p className="font-medium">123 College Avenue</p>
                    <p>Education City, EC 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group hover:bg-white/60 p-3 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <a
                    href="tel:+15551234567"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium"
                  >
                    (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-4 group hover:bg-white/60 p-3 rounded-xl transition-all duration-300 hover:shadow-md">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <a
                    href="mailto:info@bluecrest.edu"
                    className="text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium"
                  >
                    info@bluecrest.edu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="relative mt-12 pt-8">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            <div
              className={`flex flex-col md:flex-row justify-between items-center gap-6 text-sm ${
                isVisible ? "footer-item-animate" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
            </div> */}
          {/* </div> */}
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button> */}
    </>
  )
}
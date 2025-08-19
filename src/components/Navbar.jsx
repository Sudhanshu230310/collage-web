"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Info, Phone, Sparkles } from "lucide-react"

export default function ElegantNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    setMounted(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About", href: "/", icon: <Info size={18} /> },
    { name: "Facilities", href: "/facilities", icon: <Info size={18} /> },
    { name: "Achievement", href: "/", icon: <Phone size={18} /> },
    { name: "Contact", href: "#footer", icon: <Phone size={18} /> },
  ]

  return (
    <div>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-50 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-stone-200/50"
            : "bg-white/80 backdrop-blur-md border-b border-stone-100/30"
        }`}
      >
        <div className="lg:mx-16 mx-8 px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-sm">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-stone-700 via-blue-700 to-blue-700 bg-clip-text text-transparent">
                  Elegant
                </span>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault()
                      const target = document.querySelector(link.href)
                      if (target) target.scrollIntoView({ behavior: "smooth" })
                      setIsOpen(false)
                    }
                  }}
                  className="relative group px-4 py-2 rounded-xl hover:bg-blue-50"
                >
                  <span className="text-stone-700 font-medium group-hover:text-blue-800">
                    {link.name}
                  </span>
                </motion.a>
              ))}

              {/* CTA Buttons */}
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="ml-4 pl-4 border-l border-stone-200 flex gap-3"
              >
                <button className="px-5 py-2 cursor-pointer hover:scale-105 transition-all duration-150 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm">
                  Student Login
                </button>
                <button className="px-5 py-2 cursor-pointer hover:scale-105 transition-all duration-150 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm">
                  Admin Login
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="lg:hidden"
            >
              <button
                onClick={() => setIsOpen(true)}
                className="p-3 cursor-pointer rounded-xl bg-gradient-to-br from-stone-100 to-blue-100"
              >
                <Menu size={20} className="text-stone-700" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease:"backInOut"}}
              className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl border-l border-stone-200/50 shadow-2xl z-50"
            >
              <div className="flex items-center justify-between px-6 py-6 border-b border-stone-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-lg font-semibold text-stone-800">Navigation</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-stone-100">
                  <X size={20} className="text-stone-600" />
                </button>
              </div>

              <div className="flex flex-col p-6 space-y-2">
                {links.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-stone-100 to-blue-100 flex items-center justify-center">
                      {link.icon}
                    </div>
                    <span className="text-stone-700 font-medium">{link.name}</span>
                  </motion.a>
                ))}

                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + links.length * 0.1, duration: 0.4 }}
                  className="pt-6 mt-6 border-t border-stone-100 space-y-3"
                >
                  <button className="w-full cursor-pointer hover:scale-105 transition-all duration-150 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm">
                    Student Login
                  </button>
                  <button className="w-full cursor-pointer hover:scale-105 transition-all duration-150 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-sm">
                    Admin Login
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Overlay */}
            <motion.div
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-stone-900/30 backdrop-blur-sm z-40"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

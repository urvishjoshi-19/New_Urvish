'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
  '/sheetal-removebg-preview.png',
  '/kaveru-removebg-preview.png',
  '/samsung-removebg-preview.png',
  '/mother_dairy-removebg-preview.png',
  '/volks_vager-removebg-preview.png',
  '/vectus-removebg-preview.png',
  '/sintex-removebg-preview (1).png',
  '/skoda-removebg-preview.png',
]

const LogoCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollWidth = carousel.scrollWidth
    const clientWidth = carousel.clientWidth

    const animate = () => {
      if (carousel.scrollLeft >= scrollWidth - clientWidth) {
        carousel.scrollLeft = 0
      } else {
        carousel.scrollLeft += 1
      }
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-muted py-12">
      <div className="container">
        <h2 className="mb-8 text-center text-4xl font-extrabold text-black">
          Our Clients
        </h2>
        <div 
          ref={carouselRef}
          className="flex overflow-hidden"
          style={{ width: '100%' }}
        >
          <motion.div
            className="flex"
            style={{ minWidth: '200%' }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-2 flex items-center justify-center hover:scale-110 transition-transform duration-300 relative"
                style={{ width: '10%' }}
              >
                <div className="group relative">
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    width={180}
                    height={90}
                    className="object-contain group-hover:brightness-125"
                  />
                  <div className="absolute inset-0 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300 bg-transparent border border-blue-500"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel

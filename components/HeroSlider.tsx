'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Define the Slide type
type Slide = {
  type: 'video' | 'image'
  content: string
  caption: string
}

// Use the Slide type for the slides array
const slides: Slide[] = [
  {
    type: 'video',
    content: '/istockphoto-1001835444-640_adpp_is.mp4',
    caption: 'Transforming Waste into Valuable Resources',
  },
  {
    type: 'image',
    content: '/steptodown.com144180.jpg',
    caption: 'Sustainable Practices for a Cleaner Planet',
  },
  {
    type: 'video',
    content: '/istockphoto-1325718140-640_adpp_is.mp4',
    caption: 'Leading the Way in Plastic Recycling Technology',
  },
  {
    type: 'video',
    content: '/istockphoto-1282260538-640_adpp_is.mp4',
    caption: 'Partnering for a Sustainable Future',
  },
  {
    type: 'video',
    content: '/istockphoto-641350692-640_adpp_is.mp4',
    caption: 'Innovative Solutions for a Greener Tomorrow',
  },
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  const goToSlide = (index: number) => setCurrentSlide(index)

  return (
    <div className="relative h-[60vh] w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'image' ? (
            <Image
              src={slide.content}
              alt={slide.caption}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
          ) : (
            <video
              src={slide.content}
              autoPlay
              loop
              muted
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl animate-fade-in glow-text">
              {slide.caption}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white/20 text-white hover:bg-white/30 rounded-full p-2 shadow-lg"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-white/20 text-white hover:bg-white/30 rounded-full p-2 shadow-lg"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider

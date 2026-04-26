'use client'

import { useState, useEffect } from 'react'

const chillerTypes = [
  {
    name: 'Screw Chillers',
    image: '/images/chillers/screw-chiller.jpg',
    alt: 'Screw Chiller System',
    description: 'High-efficiency industrial screw chiller systems for large-scale cooling applications'
  },
  {
    name: 'Centrifugal Chillers',
    image: '/images/chillers/centrifugal-chiller.jpg',
    alt: 'Centrifugal Chiller System',
    description: 'Advanced centrifugal chillers for commercial buildings and industrial facilities'
  },
  {
    name: 'Process Chillers',
    image: '/images/chillers/process-chiller.jpg',
    alt: 'Process Chiller System',
    description: 'Specialized process chillers for manufacturing and industrial applications'
  },
  {
    name: 'Reciprocating Chillers',
    image: '/images/chillers/reciprocating-chiller.jpg',
    alt: 'Reciprocating Chiller System',
    description: 'Reliable reciprocating chillers for medium-capacity cooling requirements'
  },
  {
    name: 'Air-Cooled Chillers',
    image: '/images/chillers/aircooled-chiller.jpg',
    alt: 'Air-Cooled Chiller System',
    description: 'Efficient air-cooled chillers for installations without water cooling infrastructure'
  },
  {
    name: 'Water-Cooled Chillers',
    image: '/images/chillers/watercooled-chiller.jpg',
    alt: 'Water-Cooled Chiller System',
    description: 'High-performance water-cooled chillers for optimal energy efficiency'
  }
]

export default function ChillerBanners() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        // With 6 chiller types, we need to scroll through 600% (6 * 100)
        return newPosition >= 600 ? 0 : newPosition;
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Chiller Types We Service</h2>
          <p className="text-gray-600">Comprehensive service solutions for all types of industrial and commercial chiller systems</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-linear"
            style={{ transform: `translateX(-${scrollPosition}%)` }}
          >
            {/* Duplicate the array for seamless scrolling */}
            {[...chillerTypes, ...chillerTypes].map((chillerType, index) => (
              <div key={index} className="flex-shrink-0 w-full px-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-50">
                    <img 
                      src={chillerType.image} 
                      alt={chillerType.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="text-sm font-semibold">{chillerType.name}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{chillerType.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{chillerType.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-600 font-semibold text-sm">Service Available</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {chillerTypes.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(scrollPosition / 100) % chillerTypes.length === index
                  ? 'bg-primary-600'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

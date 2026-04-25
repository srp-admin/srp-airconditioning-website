'use client'

import { useState, useEffect } from 'react'

const chillerBrands = [
  {
    name: 'Bluestar',
    image: '/images/chillers/bluestar-screw-chiller.jpg',
    alt: 'Bluestar Chiller',
    description: 'Premium Industrial Chillers'
  },
  {
    name: 'Daikin',
    image: '/images/chillers/daikin-screw-chiller.jpg',
    alt: 'Daikin Chiller',
    description: 'High-Efficiency Chillers'
  },
  {
    name: 'York',
    image: '/images/chillers/york-screw-chiller.png',
    alt: 'York Chiller',
    description: 'Reliable Industrial Chillers'
  },
  {
    name: 'Carrier',
    image: '/images/chillers/carrier-screw-chiller.jpg',
    alt: 'Carrier Chiller',
    description: 'Advanced Cooling Solutions'
  },
  {
    name: 'Voltas',
    image: '/images/chillers/voltas-screw-chiller.jpg',
    alt: 'Voltas Chiller',
    description: 'Commercial Cooling Systems'
  }
]

export default function ChillerBanners() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        // With 5 banners, we need to scroll through 500% (5 * 100)
        return newPosition >= 500 ? 0 : newPosition;
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Premium Chiller Brands We Service</h2>
          <p className="text-gray-600">Expert service for leading industrial chiller manufacturers</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-linear"
            style={{ transform: `translateX(-${scrollPosition}%)` }}
          >
            {/* Duplicate the array for seamless scrolling */}
            {[...chillerBrands, ...chillerBrands].map((brand, index) => (
              <div key={index} className="flex-shrink-0 w-full px-4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-50">
                    <img 
                      src={brand.image} 
                      alt={brand.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-white">
                      <p className="text-sm font-semibold">{brand.name}</p>
                    </div>
                    <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {brand.name}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{brand.name} Chillers</h3>
                    <p className="text-gray-600 text-sm mb-3">{brand.description}</p>
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
          {chillerBrands.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(scrollPosition / 100) % chillerBrands.length === index
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

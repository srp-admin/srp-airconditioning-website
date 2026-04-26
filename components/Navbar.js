'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SRP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">SRP Airconditioning</h1>
                <p className="text-xs text-gray-600">Chiller Services & Repairs</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="/industries" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Industries
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact Us
            </Link>
            <div className="flex items-center space-x-4 ml-8">
              <a href="tel:+919911004723" className="flex items-center text-primary-600 hover:text-primary-700">
                <Phone className="w-4 h-4 mr-1" />
                <span className="font-semibold">+91 99110 04723</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">
                About Us
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-primary-600 font-medium">
                Services
              </Link>
              <Link href="/industries" className="text-gray-700 hover:text-primary-600 font-medium">
                Industries
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                Contact Us
              </Link>
              <div className="flex items-center space-x-4 pt-4 border-t">
                <a href="tel:+919911004723" className="flex items-center text-primary-600">
                  <Phone className="w-4 h-4 mr-1" />
                  <span className="font-semibold">+91 9911004723</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, Clock, CheckCircle, Wrench, Shield, Zap, Users, Award, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert Chiller Services & Repairs
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Your trusted partner for professional chiller installation, maintenance, and emergency repair services across North India. 24/7 service available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Get Free Quote
                </Link>
                <Link href="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                  Our Services
                </Link>
              </div>
              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">24/7 Emergency: +91 99110 04723</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">10+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm">Projects Completed</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">20+</div>
                    <div className="text-sm">Expert Technicians</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About SRP Airconditioning
              </h2>
              <p className="text-gray-600 mb-6">
                SRP Airconditioning is a leading provider of comprehensive chiller services and solutions in North India. With over 10 years of industry experience, we specialize in the installation, maintenance, and repair of industrial and commercial chiller systems.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of certified technicians and engineers is committed to delivering exceptional service quality, ensuring optimal performance and energy efficiency for your cooling systems. We serve a diverse range of industries, including pharmaceuticals, food processing, manufacturing, and commercial buildings.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Certified Experts</h4>
                  {/*  <p className="text-gray-600 text-sm">Industry-certified technicians</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Assured</h4>
                {/*   <p className="text-gray-600 text-sm">ISO certified processes</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Response</h4>
                {/*    <p className="text-gray-600 text-sm">24/7 emergency service</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                {/*    <p className="text-gray-600 text-sm">500+ satisfied clients</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary-600 font-semibold">Our Mission</span>
                    <TrendingUp className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-gray-700">
                    To provide reliable, efficient, and cost-effective chiller solutions that ensure optimal performance and longevity for our clients' cooling systems.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary-600 font-semibold">Our Vision</span>
                    <Users className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-gray-700">
                    To become the most trusted chiller service provider in North India through innovation, quality service, and customer-centric approach.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-primary-600 font-semibold">Core Values</span>
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <p className="text-gray-700">
                    Integrity, Excellence, Innovation, and Customer Satisfaction drive everything we do at SRP Airconditioning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From installation to emergency repairs, we offer end-to-end chiller solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chiller Installation</h3>
              <p className="text-gray-600 mb-4">
                Professional installation of all types of chillers with precise setup, commissioning, and testing.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold flex items-center hover:text-primary-700">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Preventive Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Regular maintenance programs to ensure optimal performance, efficiency, and prevent breakdowns.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold flex items-center hover:text-primary-700">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Repairs</h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency repair services to minimize downtime and restore your chiller operations quickly.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold flex items-center hover:text-primary-700">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Chiller Overhauling</h3>
              <p className="text-gray-600 mb-4">
                Complete system refurbishment and overhauling to extend the life and improve efficiency of aging chillers.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold flex items-center hover:text-primary-700">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spare Parts Supply</h3>
              <p className="text-gray-600 mb-4">
                Genuine and high-quality spare parts for all major chiller brands with warranty assurance.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold flex items-center hover:text-primary-700">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Energy Audits</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive energy audits to optimize chiller performance and reduce operational costs.
              </p>
              <Link href="/services" className="text-primary-600 font-semibold flex items-center hover:text-primary-700">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Professional Chiller Services?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Get in touch with our experts for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Contact Us Now
              </Link>
              <a href="tel:+919876543210" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                <Phone className="w-4 h-4 inline mr-2" />
                Call: +91 99110 04723
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Expert Technicians</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowRight, Wrench, Clock, Zap, Shield, Users, TrendingUp, CheckCircle, Phone, Mail } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Chiller Installation",
      description: "Professional installation of all types of chillers including air-cooled, water-cooled, screw, scroll, and reciprocating chillers.",
      features: [
        "Site survey and assessment",
        "System design and engineering",
        "Installation and commissioning",
        "Performance testing and optimization",
        "Operator training and documentation"
      ],
      color: "blue"
    },
    {
      icon: Clock,
      title: "Preventive Maintenance",
      description: "Comprehensive maintenance programs to ensure optimal performance, efficiency, and prevent unexpected breakdowns.",
      features: [
        "Regular inspection and cleaning",
        "Performance monitoring",
        "Lubrication and adjustments",
        "Refrigerant level checks",
        "Detailed maintenance reports"
      ],
      color: "green"
    },
    {
      icon: Zap,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services to minimize downtime and restore your chiller operations quickly and efficiently.",
      features: [
        "Rapid response team deployment",
        "Fault diagnosis and troubleshooting",
        "On-site repair and replacement",
        "Temporary cooling solutions",
        "Post-repair testing and validation"
      ],
      color: "red"
    },
    {
      icon: Shield,
      title: "Chiller Overhauling",
      description: "Complete system refurbishment and overhauling to extend the life and improve efficiency of aging chillers.",
      features: [
        "Complete system disassembly",
        "Component inspection and testing",
        "Replacement of worn parts",
        "System reassembly and testing",
        "Performance optimization"
      ],
      color: "purple"
    },
    {
      icon: Users,
      title: "Spare Parts Supply",
      description: "Genuine and high-quality spare parts for all major chiller brands with warranty assurance and quick delivery.",
      features: [
        "Genuine OEM parts",
        "Comprehensive inventory",
        "Quick delivery service",
        "Warranty assurance",
        "Technical support for parts"
      ],
      color: "indigo"
    },
    {
      icon: TrendingUp,
      title: "Energy Audits",
      description: "Comprehensive energy audits to optimize chiller performance, reduce operational costs, and improve efficiency.",
      features: [
        "Energy consumption analysis",
        "Performance evaluation",
        "Efficiency recommendations",
        "Cost-benefit analysis",
        "Implementation support"
      ],
      color: "yellow"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-100', icon: 'text-blue-600' },
      green: { bg: 'bg-green-100', icon: 'text-green-600' },
      red: { bg: 'bg-red-100', icon: 'text-red-600' },
      purple: { bg: 'bg-purple-100', icon: 'text-purple-600' },
      indigo: { bg: 'bg-indigo-100', icon: 'text-indigo-600' },
      yellow: { bg: 'bg-yellow-100', icon: 'text-yellow-600' }
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              From installation to emergency repairs, we offer end-to-end chiller solutions tailored to your specific needs.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const colors = getColorClasses(service.color)
              return (
                <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="p-8">
                    <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" className="btn-primary flex items-center justify-center">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure the highest quality service delivery for all your chiller needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive site survey and requirement analysis
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution Design</h3>
              <p className="text-gray-600 text-sm">
                Customized solution proposal and cost estimation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Professional execution by certified technicians
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-up Support</h3>
              <p className="text-gray-600 text-sm">
                Post-service monitoring and maintenance support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-gray-600 mb-6">
                At SRP Airconditioning, we differentiate ourselves through our commitment to excellence, technical expertise, and customer-centric approach.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Technicians</h4>
                    <p className="text-gray-600">Certified and experienced professionals with in-depth knowledge of all chiller types</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Response Time</h4>
                    <p className="text-gray-600">Rapid deployment of service teams for emergencies and scheduled maintenance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                    <p className="text-gray-600">ISO-certified processes and strict quality control measures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                    <p className="text-gray-600">Transparent pricing with no hidden costs and value-added services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-gray-600">Round-the-clock emergency service and technical support</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Commitment</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Response Time</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Emergency Response</span>
                      <span className="font-semibold text-primary-600">Within 4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Regular Service</span>
                      <span className="font-semibold text-primary-600">Within 24 hours</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Quality Metrics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">First-Time Fix Rate</span>
                      <span className="font-semibold text-primary-600">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Customer Satisfaction</span>
                      <span className="font-semibold text-primary-600">98%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Service Coverage</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">All Major Brands</span>
                      <span className="font-semibold text-primary-600">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">All Chiller Types</span>
                      <span className="font-semibold text-primary-600">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact us today for a free consultation and quote for your chiller service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Free Quote
              </Link>
              <a href="tel:+919876543210" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                <Phone className="w-4 h-4 inline mr-2" />
                Call: +91 99110 04723
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowRight, Factory, Building, FlaskConical, Server, ShoppingBag, Zap, CheckCircle, Users, Shield } from 'lucide-react'

export default function Industries() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing Industries",
      description: "Comprehensive cooling solutions for manufacturing plants and industrial facilities.",
      applications: [
        "Process cooling for machinery",
        "Temperature control for production lines",
        "HVAC systems for worker comfort",
        "Cooling for hydraulic systems"
      ],
      challenges: "High heat loads, continuous operation requirements, strict temperature tolerances"
    },
    {
      icon: FlaskConical,
      title: "Pharmaceuticals",
      description: "Precision cooling solutions for pharmaceutical manufacturing and research facilities.",
      applications: [
        "Cleanroom HVAC systems",
        "Temperature-controlled storage",
        "Process cooling for drug manufacturing",
        "Research facility cooling"
      ],
      challenges: "Strict regulatory compliance, precise temperature control, contamination prevention"
    },
    {
      icon: ShoppingBag,
      title: "Food & Beverage",
      description: "Reliable cooling solutions for food processing, storage, and beverage production.",
      applications: [
        "Food processing cooling",
        "Cold storage facilities",
        "Beverage production cooling",
        "HVAC for processing areas"
      ],
      challenges: "Hygiene requirements, food safety standards, energy efficiency needs"
    },
    {
      icon: Building,
      title: "Commercial Buildings",
      description: "HVAC and cooling solutions for office buildings, malls, and commercial complexes.",
      applications: [
        "Central air conditioning",
        "Building management systems",
        "Energy-efficient cooling",
        "Comfort cooling systems"
      ],
      challenges: "Energy efficiency, occupant comfort, integration with building systems"
    },
    {
      icon: Server,
      title: "Data Centers",
      description: "Critical cooling solutions for data centers and IT infrastructure facilities.",
      applications: [
        "Server room cooling",
        "Data center HVAC",
        "Precision cooling systems",
        "Hot aisle containment"
      ],
      challenges: "High heat density, 24/7 operation requirements, redundancy needs"
    },
    {
      icon: Zap,
      title: "Chemical Industries",
      description: "Specialized cooling solutions for chemical processing and petrochemical facilities.",
      applications: [
        "Process cooling for reactors",
        "Temperature control for chemical processes",
        "Cooling for storage tanks",
        "HVAC for laboratory areas"
      ],
      challenges: "Corrosive environments, safety requirements, specialized materials"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              We provide specialized chiller solutions tailored to the unique requirements of various industries across North India.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <Factory className="w-5 h-5" />
                <span>Multiple Industries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Customized Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                    <p className="text-gray-600 mb-6">{industry.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                      <ul className="space-y-2">
                        {industry.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Challenges:</h4>
                      <p className="text-gray-700 text-sm">{industry.challenges}</p>
                    </div>
                    
                    <Link href="/contact" className="btn-primary flex items-center justify-center">
                      Get Solution
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Industry-Specific Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience serving diverse industries, we understand the unique cooling challenges and requirements specific to each sector. Our team of experts is trained to provide tailored solutions that meet industry standards and regulatory requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
                    <p className="text-gray-600">Solutions that meet industry-specific regulations and standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Energy Efficiency</h4>
                    <p className="text-gray-600">Optimized systems for reduced energy consumption and operational costs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalability</h4>
                    <p className="text-gray-600">Solutions that grow with your business and production needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Reliability</h4>
                    <p className="text-gray-600">Robust systems designed for continuous operation and minimal downtime</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">1. Industry Analysis</h4>
                  <p className="text-gray-700">
                    Understanding your specific industry requirements, challenges, and operational constraints.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">2. Custom Solution Design</h4>
                  <p className="text-gray-700">
                    Developing tailored cooling solutions that address your unique needs and optimize performance.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">3. Implementation & Support</h4>
                  <p className="text-gray-700">
                    Professional installation and ongoing support to ensure optimal system performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped businesses across various industries achieve their cooling goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <Factory className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">Manufacturing</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Large Manufacturing Plant</h3>
              <p className="text-gray-600 text-sm mb-4">
                Installed a 500 TR water-cooled chiller system for a leading automobile parts manufacturer, reducing energy consumption by 25%.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Delhi NCR</span>
                <span className="text-sm font-semibold text-primary-600">2023</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <FlaskConical className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">Pharmaceutical</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pharma Manufacturing Unit</h3>
              <p className="text-gray-600 text-sm mb-4">
                Implemented precision cooling systems for GMP-compliant cleanrooms, maintaining ±0.5°C temperature accuracy.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Haryana</span>
                <span className="text-sm font-semibold text-primary-600">2023</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                <Server className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">Data Center</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IT Data Center</h3>
              <p className="text-gray-600 text-sm mb-4">
                Designed and installed redundant cooling systems for a 10,000 sq ft data center with N+1 redundancy.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Noida</span>
                <span className="text-sm font-semibold text-primary-600">2022</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/contact" className="btn-primary">
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white">
        <div className="container-custom section-padding">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Industry-Specific Cooling Solutions?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Our experts are ready to provide customized solutions for your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Industry Solution
              </Link>
              <Link href="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-600">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

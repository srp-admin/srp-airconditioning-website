import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Award, Clock, MapPin, Phone, Mail, Shield, Target, Lightbulb, Heart } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About SRP Airconditioning
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Your trusted partner for professional chiller services with over 10 years of excellence in the industry.
            </p>
            
           {/* <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>20+ Expert Team</span>
              </div>
            </div> 
            */}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, SRP Airconditioning began as a small team of passionate engineers dedicated to providing reliable chiller solutions to industries in North India. Our journey started with a simple mission: to deliver exceptional service quality and technical expertise in the HVAC sector.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have grown into a leading chiller service provider. Our commitment to innovation, quality, and customer satisfaction has earned us the trust of numerous clients, from small businesses to large industrial corporations.
              </p>
              <p className="text-gray-600 mb-6">
                Today, SRP Airconditioning stands as a symbol of reliability and excellence in the chiller services industry, with a team of over 20 technicians and engineers serving clients across North India.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600 mb-1">2015</div>
                  <div className="text-gray-600">Founded</div>
                </div>
               {/* <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600 mb-1">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div> */}
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600 mb-1">20+</div>
                  <div className="text-gray-600">Expert Team</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-600 mb-1">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="w-5 h-5 text-primary-600 mr-2" />
                    Our Mission
                  </h3>
                  <p className="text-gray-700">
                    To provide reliable, efficient, and cost-effective chiller solutions that ensure optimal performance and longevity for our clients' cooling systems through technical excellence and innovation.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 text-primary-600 mr-2" />
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    To become the most trusted and preferred chiller service provider in North India by setting industry standards for quality, reliability, and customer satisfaction.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Heart className="w-5 h-5 text-primary-600 mr-2" />
                    Our Values
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Integrity:</strong> Honesty and transparency in all dealings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Excellence:</strong> Commitment to highest quality standards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Innovation:</strong> Continuous improvement and adoption of new technologies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Customer Focus:</strong> Putting client needs first</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of certified engineers and technicians who are committed to delivering exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CEO Profile */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-600">SK</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  CEO
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sonu Kumar</h3>
                <p className="text-primary-600 font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 mb-4">
                  A visionary leader with over 15 years of experience in the HVAC and chiller industry. Sonu founded SRP Airconditioning with a mission to deliver exceptional cooling solutions and unmatched customer service across North India.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-gray-700 text-sm">B.E. Mechanical Engineering</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-gray-700 text-sm">MBA in Operations Management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-gray-700 text-sm">15+ Years Industry Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-gray-700 text-sm">ASHRAE Certified Professional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Head Profile */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary-600">HA</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Service Head
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Harit Arora</h3>
                <p className="text-primary-600 font-semibold mb-4">Head of Service Operations</p>
                <p className="text-gray-600 mb-4">
                  A technical expert with extensive experience in chiller maintenance and service operations. Harit leads our service team with a focus on quality, efficiency, and customer satisfaction, ensuring all projects are completed to the highest standards.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-gray-700 text-sm">B.Tech in Mechanical Engineering</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-gray-700 text-sm">HVAC System Specialist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-gray-700 text-sm">12+ Years Field Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary-600" />
                    <span className="text-gray-700 text-sm">Certified Service Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications 
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We adhere to international quality standards and maintain various certifications to ensure the best service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600 text-sm">
                Quality Management System Certified
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ASHRAE Member</h3>
              <p className="text-gray-600 text-sm">
                American Society of Heating, Refrigerating and Air-Conditioning Engineers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ISHRAE Certified</h3>
              <p className="text-gray-600 text-sm">
                Indian Society of Heating, Refrigerating and Air-Conditioning Engineers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Certified</h3>
              <p className="text-gray-600 text-sm">
                OSHA and Industrial Safety Standards Compliant
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Infrastructure */}
      <section className="bg-gray-50">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Infrastructure
              </h2>
              <p className="text-gray-600 mb-6">
                SRP Airconditioning boasts state-of-the-art infrastructure and facilities to support our comprehensive service offerings. Our modern workshop and office spaces are equipped with the latest tools and technology.
              </p>
              <div className="space-y-4">
               {/*} <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                 <div>
                    <h4 className="font-semibold text-gray-900">Modern Workshop</h4>
                    <p className="text-gray-600">Well-equipped facility for chiller testing and repairs</p>
                  </div> 
                </div> */}
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Spare Parts Inventory</h4>
                    <p className="text-gray-600">Comprehensive stock of genuine parts for quick service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Vehicles</h4>
                    <p className="text-gray-600">Fully equipped mobile service units for on-site support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Testing Laboratory</h4>
                    <p className="text-gray-600">Advanced testing equipment for accurate diagnostics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Head Office</h4>
                    <p className="text-gray-600">
                      Industrial Area, Phase I<br />
                      New Delhi, India - 110044
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Numbers</h4>
                    <p className="text-gray-600">
                      Office: +91 99110 04723<br />
                      Emergency: +91 99110 04723
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      srpaircondition@gmail.com<br />
                      srpasales@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Working Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

import { Zap, Shield, CheckCircle, Instagram, MapPin } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [showAllProducts, setShowAllProducts] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <nav className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#3d4f5c] to-[#5a7280] bg-opacity-90 backdrop-blur-sm text-white rounded-2xl shadow-lg px-6 py-4 flex items-center justify-between" style={{backgroundColor: 'rgba(61, 79, 92, 0.9)'}}>
            <div className="flex items-center gap-3">
              <img src="/dfefwe.png" alt="ATSA Logo" className="w-14 h-14 object-contain" style={{mixBlendMode: 'lighten'}} />
              <span className="text-xl font-bold">ATSA</span>
            </div>
            <div className="hidden md:flex gap-3">
              <a href="#products" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">Products</a>
              <a href="#services" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">Services</a>
              <a href="#materials" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition">Materials</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-white text-[#3d4f5c] hover:bg-gray-100 transition font-semibold shadow-md">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-6 py-32 mt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-[#3d4f5c] mb-6">
            Precision Manufacturing in Stainless Steel
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Since 1992, ATSA has been leading the industry with over 30 years of expertise in stainless steel fabrication and precision metalwork.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Specializing in aluminum, inox, stainless steel, welding, cutting, bending, and mechanical works.
          </p>
        </div>
      </section>

      <section id="products" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-[#3d4f5c] mb-12 text-center">Our Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`relative group ${!showAllProducts ? '' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/80 backdrop-blur-xl rounded-lg transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="/sink1 copy.png" alt="Double Sink Station" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Double Sink Station</h3>
                <p className="text-gray-600">Professional stainless steel double sink station with storage shelf, perfect for commercial kitchens and food service operations.</p>
              </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/80 backdrop-blur-xl rounded-lg transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="/Gemini_Generated_Image_5gipdd5gipdd5gip.png" alt="Commercial Kitchen Hood" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Commercial Kitchen Hood</h3>
                <p className="text-gray-600">Heavy-duty stainless steel kitchen exhaust hood with ventilation system, designed for professional restaurant environments.</p>
              </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/80 backdrop-blur-xl rounded-lg transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="/Gemini_Generated_Image_g4pezdg4pezdg4pe copy.jpg" alt="Service Counter" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Service Counter</h3>
                <p className="text-gray-600">Custom-built stainless steel service counter with storage compartments and shelving, ideal for cafes and restaurants.</p>
              </div>
              </div>
            </div>
            {showAllProducts && (
              <>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/80 backdrop-blur-xl rounded-lg transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="/Gemini_Generated_Image_jmj9n1jmj9n1jmj9 copy.png" alt="Professional Gas Range" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Professional Gas Range</h3>
                <p className="text-gray-600">Four-burner commercial gas range with stainless steel construction and storage base, built for high-volume cooking.</p>
              </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/80 backdrop-blur-xl rounded-lg transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="/Gemini_Generated_Image_ymi0i4ymi0i4ymi0.png" alt="Exhaust Canopy" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Exhaust Canopy</h3>
                <p className="text-gray-600">Industrial stainless steel exhaust canopy with grease filters and ventilation system for commercial kitchen safety.</p>
              </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/80 backdrop-blur-xl rounded-lg transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="/unnamed copy.png" alt="Brick Pizza Oven" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Brick Pizza Oven</h3>
                <p className="text-gray-600">Traditional brick pizza oven with stainless steel base cabinet and sliding doors, perfect for authentic wood-fired cooking.</p>
              </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/80 backdrop-blur-xl rounded-lg transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="/Gemini_Generated_Image_5tsbvd5tsbvd5tsb copy.png" alt="Metal Sculpture Monument" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Metal Sculpture Monument</h3>
                <p className="text-gray-600">Elegant stainless steel sculptural monument featuring intricate bending and polished finish, showcasing artistic metalwork expertise.</p>
              </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/80 backdrop-blur-xl rounded-lg transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="/Gemini_Generated_Image_acy70qacy70qacy7.jpg" alt="BBQ Grill Station" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">BBQ Grill Station</h3>
                <p className="text-gray-600">Custom BBQ grill station with brick base and stainless steel canopy, combining traditional grilling with modern design elements.</p>
              </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/80 backdrop-blur-xl rounded-lg transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="/Gemini_Generated_Image_exjfxaexjfxaexjf copy.png" alt="Spiral Staircase" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Spiral Staircase</h3>
                <p className="text-gray-600">Premium stainless steel spiral staircase with curved railings, demonstrating advanced bending and welding capabilities.</p>
              </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-900/80 backdrop-blur-xl rounded-lg transform transition-transform group-hover:scale-105"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
              <img src="/Gemini_Generated_Image_jfyylnjfyylnjfyy copy.png" alt="Service Kiosk" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Service Kiosk</h3>
                <p className="text-gray-600">Modern outdoor service kiosk with durable metal frame and protective panels, ideal for food service and retail applications.</p>
              </div>
              </div>
            </div>
              </>
            )}
          </div>
          {!showAllProducts && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllProducts(true)}
                className="bg-[#3d4f5c] text-white px-8 py-3 rounded-lg hover:bg-[#2d3f4c] transition font-semibold shadow-lg"
              >
                Show All
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3d4f5c] mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-8 rounded-lg shadow-sm overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition" style={{backgroundImage: 'url(https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)'}}></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/95"></div>
              <div className="relative z-10">
                <Zap className="w-12 h-12 text-[#3d4f5c] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[#3d4f5c]">Welding</h3>
                <p className="text-gray-600">
                  Expert welding services ensuring strong, durable bonds for all metal types.
                </p>
              </div>
            </div>
            <div className="relative p-8 rounded-lg shadow-sm overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition" style={{backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)'}}></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/95"></div>
              <div className="relative z-10">
                <Shield className="w-12 h-12 text-[#3d4f5c] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[#3d4f5c]">Cutting & Bending</h3>
                <p className="text-gray-600">
                  Precision cutting and bending services for complex metal forming requirements.
                </p>
              </div>
            </div>
            <div className="relative p-8 rounded-lg shadow-sm overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition" style={{backgroundImage: 'url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)'}}></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/95"></div>
              <div className="relative z-10">
                <CheckCircle className="w-12 h-12 text-[#3d4f5c] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-[#3d4f5c]">Mechanical Works</h3>
                <p className="text-gray-600">
                  Comprehensive mechanical fabrication and assembly services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3d4f5c] mb-12 text-center">Materials We Work With</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#3d4f5c] flex-shrink-0" />
                <span className="text-lg text-gray-700">Stainless Steel (Inox)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#3d4f5c] flex-shrink-0" />
                <span className="text-lg text-gray-700">Aluminum</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#3d4f5c] flex-shrink-0" />
                <span className="text-lg text-gray-700">Carbon Steel</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#3d4f5c] flex-shrink-0" />
                <span className="text-lg text-gray-700">Galvanized Steel (Galva)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#3d4f5c] flex-shrink-0" />
                <span className="text-lg text-gray-700">Various Metal Alloys</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#3d4f5c] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your manufacturing needs and receive a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="tel:+96171981996" className="bg-white text-[#3d4f5c] px-8 py-3 rounded hover:bg-gray-100 transition font-medium">
              +961 71 981 996
            </a>
            <a href="tel:+2250150191162" className="bg-white text-[#3d4f5c] px-8 py-3 rounded hover:bg-gray-100 transition font-medium">
              +225 01 50 19 11 62
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-500">
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="https://www.instagram.com/ats_a1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#3d4f5c] px-6 py-3 rounded hover:bg-gray-100 transition"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@atsa067"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#3d4f5c] px-6 py-3 rounded hover:bg-gray-100 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                <span>TikTok</span>
              </a>
              <a
                href="https://maps.app.goo.gl/oerTXUjQhQee3rPa8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#3d4f5c] px-6 py-3 rounded hover:bg-gray-100 transition"
              >
                <MapPin className="w-5 h-5" />
                <span>Location</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2d3f4c] text-gray-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 1992-2024 ATSA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

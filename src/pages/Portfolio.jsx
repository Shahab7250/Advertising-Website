import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home, ArrowRight, MessageCircle } from 'lucide-react'
import PortfolioCard from '../components/PortfolioCard'

const allProjects = [
  { name: 'Metro Mall Signage', location: 'Delhi', category: 'Shop Branding', description: 'Complete storefront branding for a premium retail mall including LED channel letters and ACP cladding.' },
  { name: 'AutoZone Car Showroom', location: 'Mumbai', category: 'Glow Signs', description: 'Illuminated LED glow signs and fascia boards for a high-end car dealership showroom.' },
  { name: 'TechHub Office', location: 'Bangalore', category: 'Acrylic Letters', description: 'Premium acrylic letter installation with backlighting for a leading technology company.' },
  { name: 'Highway Hoarding', location: 'Pune', category: 'Hoardings', description: '20x10 ft highway hoarding with high-resolution flex printing for a pharmaceutical brand.' },
  { name: 'Sharma Electronics', location: 'Hyderabad', category: 'ACP Boards', description: 'ACP cladding and custom signage for an electronics retail chain with multiple outlets.' },
  { name: 'FoodZone Restaurant', location: 'Chennai', category: 'Shop Branding', description: 'Complete restaurant exterior branding with neon-style signs, menu boards, and wall graphics.' },
  { name: 'Royal Jewellers', location: 'Jaipur', category: 'Steel Letters', description: 'Stainless steel 3D letters with golden backlit LED for a heritage jewellery showroom.' },
  { name: 'Swift Courier', location: 'Kolkata', category: 'Vehicle Branding', description: 'Full fleet branding for a courier and logistics company with 50+ vehicles across multiple cities.' },
  { name: 'City Hospital', location: 'Ahmedabad', category: 'Indoor Signage', description: 'Comprehensive wayfinding and department signage system for a multi-specialty hospital.' },
  { name: 'Fashion Avenue', location: 'Surat', category: 'Glow Signs', description: 'Neon-style glow signs and illuminated facade for a premium fashion boutique.' },
  { name: 'GreenTech Solar', location: 'Coimbatore', category: 'Flex Printing', description: 'Trade show banners, exhibition displays, and flex banners for a solar energy company.' },
  { name: 'Prime Realty', location: 'Noida', category: 'ACP Boards', description: 'Office entrance signage, floor indicators, and ACP cladding for a real estate firm.' },
]

const categories = ['All', 'ACP Boards', 'Glow Signs', 'Steel Letters', 'Acrylic Letters', 'Flex Printing', 'Shop Branding', 'Hoardings', 'Vehicle Branding', 'Indoor Signage']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  useEffect(() => {
    document.title = 'Portfolio — New Crown Art | Signage & Branding Projects'
  }, [])

  const filtered = active === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === active)

  return (
    <>
      {/* Page Header */}
      <section
        className="py-24 relative overflow-hidden"
        aria-label="Page header"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/33644177/pexels-photo-33644177/free-photo-of-advertising-billboards-in-lagos-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(100deg, rgba(4,4,16,0.88) 0%, rgba(4,4,16,0.80) 40%, rgba(4,4,16,0.52) 70%, rgba(4,4,16,0.28) 100%)',
        }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 30% 60%, rgba(29,78,216,0.10) 0%, transparent 60%)',
        }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <Home size={14} aria-hidden="true" />Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li className="text-white font-medium">Portfolio</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-5">
              <span className="w-8 h-0.5 bg-[#C9A84C]" aria-hidden="true" />
              12+ Showcase Projects
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Our Work Speaks{' '}
              <span className="gold-shimmer">For Itself</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Explore completed signage, branding, and printing projects from across India. Each one reflects our commitment to quality, creativity, and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-[#F9FAFB]" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="portfolio-heading" className="sr-only">Portfolio projects</h2>

          {/* Category filter */}
          <div className="mb-10 overflow-x-auto" role="tablist" aria-label="Portfolio categories">
            <div className="flex gap-2.5 pb-2 min-w-max sm:flex-wrap sm:min-w-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active === cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    active === cat
                      ? 'bg-[#1E3A8A] text-white shadow-md shadow-blue-200'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-blue-200 hover:text-[#1E3A8A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project count */}
          <p className="text-sm text-gray-500 mb-8">
            Showing <strong className="text-gray-900">{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
            {active !== 'All' && <> in <span className="text-[#1E3A8A] font-semibold">"{active}"</span></>}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <div key={project.name} className="animate-fade-in-up" style={{ animationDelay: `${(i % 6) * 0.08}s` }}>
                <PortfolioCard project={project} index={i} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #06060f 0%, #0f0820 50%, #06060f 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="grid grid-cols-5 h-full opacity-[0.08]">
            {[
              'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
              'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
              'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
              'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',
              'https://4.imimg.com/data4/YM/JM/MY-12149095/led-sign-board-1000x1000.jpg',
            ].map((src, i) => (
              <div key={i} style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100%' }} />
            ))}
          </div>
          <div className="absolute inset-0" style={{ background: 'rgba(6,6,15,0.88)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 50%, transparent 100%)' }} aria-hidden="true" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Want to See Your Project Here?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Get in touch today and let's create something exceptional together. Free quote within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 font-black px-8 py-4 rounded-xl transition-all shadow-xl hover:-translate-y-0.5 text-[#111827]"
              style={{ background: 'linear-gradient(135deg, #FFD700 0%, #C9A84C 100%)' }}
            >
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=919934855079&text=Hello%20New%20Crown%20Art%2C%20I%20would%20like%20to%20discuss%20a%20signage%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C]/10 font-bold px-8 py-4 rounded-xl transition-all"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

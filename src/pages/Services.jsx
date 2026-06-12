import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Layers, Lightbulb, Zap, Store, Type, Star, Box,
  FileImage, Megaphone, Palette, Eye, CreditCard,
  BookOpen, FileText, Image, ShoppingBag, Building2,
  Car, Radio, Navigation, PenTool, ChevronRight, Home,
} from 'lucide-react'

const services = [
  {
    icon: Layers,
    name: 'ACP Sign Boards',
    category: 'ACP Boards',
    description: 'Aluminium composite panel boards are weather-resistant and provide a sleek, modern look for any business facade. Ideal for storefronts and commercial buildings.',
    color: '#1E3A8A',
    image: '/services/acp-sign-board.jpg',
  },
  {
    icon: Lightbulb,
    name: 'Glow Sign Boards',
    category: 'Glow Signs',
    description: 'Illuminated signage ensures your brand is visible 24/7. Our glow sign boards use energy-efficient lighting to keep your business noticed even after dark.',
    color: '#F59E0B',
    image: '/services/glow-sign-board.jpg',
  },
  {
    icon: Zap,
    name: 'LED Sign Boards',
    category: 'LED Boards',
    description: 'Energy-efficient LED displays for maximum visual impact. Our LED boards are bright, long-lasting, and customizable for any branding requirement.',
    color: '#1D4ED8',
    image: '/services/led-sign-board.jpg',
  },
  {
    icon: Store,
    name: 'Shop Sign Boards',
    category: 'ACP Boards',
    description: 'Custom shop front signs that instantly communicate your brand identity. We design and fabricate signage that drives footfall and brand recognition.',
    color: '#7C3AED',
    image: '/services/shop-sign-board.jpg',
  },
  {
    icon: Type,
    name: 'Stainless Steel Letters',
    category: 'Steel Letters',
    description: 'Premium metallic 3D lettering perfect for corporate offices, luxury showrooms, and high-end retail. Available with backlit or front-lit options.',
    color: '#64748B',
    image: '/services/stainless-steel-letters.jpg',
  },
  {
    icon: Star,
    name: 'Acrylic Letters',
    category: 'Acrylic Letters',
    description: 'Vibrant colored acrylic letters that deliver stunning visual appeal. Lightweight, durable, and available in any color to match your brand.',
    color: '#EC4899',
    image: '/services/acrylic-letters.jpg',
  },
  {
    icon: Box,
    name: '3D Letter Signage',
    category: 'Acrylic Letters',
    description: 'Three-dimensional lettering creates depth and a bold visual impact. These signs stand out and create a premium impression for your brand.',
    color: '#059669',
    image: '/services/3d-letter-signage.jpg',
  },
  {
    icon: FileImage,
    name: 'Flex Banner Printing',
    category: 'Flex Printing',
    description: 'High-resolution flex banners for outdoor advertising, events, exhibitions, and promotions. Durable, weather-resistant, and vibrant color output.',
    color: '#D97706',
    image: '/services/flex-banner.jpg',
  },
  {
    icon: Radio,
    name: 'Hoardings',
    category: 'Hoardings',
    description: 'Large-format outdoor hoardings for maximum brand visibility in high-traffic areas. Perfect for product launches, brand awareness campaigns, and events.',
    color: '#1E3A8A',
    image: '/services/hoardings.jpg',
  },
  {
    icon: Palette,
    name: 'Vinyl Printing',
    category: 'Flex Printing',
    description: 'Durable vinyl prints for walls, floors, glass, and vehicles. Versatile applications with long-lasting color and sharp detail reproduction.',
    color: '#0891B2',
    image: '/services/vinyl-printing.jpg',
  },
  {
    icon: Eye,
    name: 'One Way Vision Printing',
    category: 'Flex Printing',
    description: 'Glass and window graphics with one-way vision technology. Promote your brand on glass surfaces while maintaining visibility from inside.',
    color: '#6D28D9',
    image: '/services/one-way-vision.jpg',
  },
  {
    icon: CreditCard,
    name: 'Visiting Cards',
    category: 'Print Media',
    description: 'Professional business card design and printing. High-quality cardstock options with matte, gloss, or spot UV finishes for a lasting impression.',
    color: '#1D4ED8',
    image: '/services/visiting-cards.jpg',
  },
  {
    icon: BookOpen,
    name: 'Brochures',
    category: 'Print Media',
    description: 'Multi-page marketing brochure design and printing. From bi-fold to catalog formats, we create brochures that effectively communicate your offerings.',
    color: '#1E3A8A',
    image: '/services/brochures.jpg',
  },
  {
    icon: FileText,
    name: 'Flyers',
    category: 'Print Media',
    description: 'Eye-catching single-page promotional flyers for events, offers, and campaigns. Fast turnaround with high-quality offset and digital printing.',
    color: '#059669',
    image: '/services/flyers.jpg',
  },
  {
    icon: Image,
    name: 'Posters',
    category: 'Print Media',
    description: 'Large format poster printing for retail displays, events, and advertising campaigns. Available in multiple sizes with vivid color accuracy.',
    color: '#7C3AED',
    image: '/services/posters.jpg',
  },
  {
    icon: ShoppingBag,
    name: 'Shop Branding',
    category: 'Shop Branding',
    description: 'Complete shop interior and exterior branding solutions. From sign boards to wall graphics and display units, we transform your retail space.',
    color: '#F59E0B',
    image: '/services/shop-branding.jpg',
  },
  {
    icon: Building2,
    name: 'Office Branding',
    category: 'Office Branding',
    description: 'Professional office wall graphics, reception signage, and interior branding. Create an inspiring and branded workspace for your team and clients.',
    color: '#64748B',
    image: '/services/office-branding.jpg',
  },
  {
    icon: Car,
    name: 'Vehicle Branding',
    category: 'Vehicle Branding',
    description: 'Car and commercial vehicle wrapping and branding. Turn your fleet into moving billboards with eye-catching, durable vehicle graphics.',
    color: '#0891B2',
    image: '/services/vehicle-branding.jpg',
  },
  {
    icon: Megaphone,
    name: 'Outdoor Advertising',
    category: 'Hoardings',
    description: 'Complete outdoor advertising campaign solutions including hoardings, bus shelters, kiosks, and transit media for maximum reach.',
    color: '#1E3A8A',
    image: '/services/outdoor-advertising.jpg',
  },
  {
    icon: Navigation,
    name: 'Indoor Signage',
    category: 'Indoor Signage',
    description: 'Wayfinding systems, reception signage, and interior signage solutions. Help visitors navigate your space with clear, branded directional signage.',
    color: '#1D4ED8',
    image: '/services/indoor-signage.jpg',
  },
  {
    icon: PenTool,
    name: 'Graphic Design Services',
    category: 'Graphic Design',
    description: 'Complete graphic design solutions for all your branding needs. Logo design, brand identity, and creative artworks for all print and digital formats.',
    color: '#EC4899',
    image: '/services/graphic-design.jpg',
  },
]

const filters = [
  'All',
  'ACP Boards',
  'Glow Signs',
  'LED Boards',
  'Steel Letters',
  'Acrylic Letters',
  'Flex Printing',
  'Shop Branding',
  'Hoardings',
  'Vehicle Branding',
  'Indoor Signage',
  'Office Branding',
  'Print Media',
  'Graphic Design',
]

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    document.title = 'Services — New Crown Art | ACP Boards, LED Signs, Branding & More'
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }, [])

  const filtered = activeFilter === 'All'
    ? services
    : services.filter((s) => s.category === activeFilter)

  return (
    <>
      {/* Page header */}
      <section className="py-16 relative overflow-hidden" aria-label="Page header" style={{
        backgroundImage: `linear-gradient(135deg, rgba(5,5,15,0.94) 0%, rgba(30,5,5,0.88) 50%, rgba(5,5,15,0.94) 100%), url('https://images.pexels.com/photos/32459951/pexels-photo-32459951/free-photo-of-vibrant-billboards-in-bustling-urban-street.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.3) 0%, transparent 70%)',
          backgroundPosition: '80% 50%',
        }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <Home size={14} aria-hidden="true" />
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li className="text-white font-medium">Services</li>
            </ol>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Our Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Comprehensive advertising and signage solutions for businesses of all sizes. From sign boards to complete brand identity.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-[#F9FAFB]" aria-labelledby="services-grid-heading">
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block w-12 h-1 bg-[#1E3A8A] rounded mb-4" aria-hidden="true" />
            <h2 id="services-grid-heading" className="text-3xl font-black text-gray-900">
              {filtered.length} Specialised Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Everything your business needs for visual branding, advertising, and signage — all under one roof.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-[#1E3A8A] hover:text-[#1E3A8A]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filtered.map((service, i) => (
              <article
                key={service.name}
                id={toSlug(service.name)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-1 flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${(i % 4) * 0.07}s` }}
              >
                {/* Image — tall for full clarity */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: service.color }}>
                    <service.icon size={18} />
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 right-3 bg-black/50 text-white text-[10px] font-bold px-2 py-1 rounded-full backdrop-blur-sm">
                    {service.category}
                  </div>
                  {/* WhatsApp icon only — bottom right */}
                  <a
                    href={`https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(service.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp inquiry for ${service.name}`}
                    className="absolute bottom-3 right-3 w-11 h-11 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <img src="/whatsapp-icon.avif" alt="WhatsApp" className="w-6 h-6 object-contain" />
                  </a>
                </div>
                {/* Content — compact */}
                <div className="px-4 py-3 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{service.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A8A] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Can't find what you need?
          </h2>
          <p className="text-blue-100 mb-8">
            Contact us directly and we'll create a custom solution tailored to your business requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all"
          >
            Contact Us
            <ChevronRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}

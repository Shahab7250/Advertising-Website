import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Layers, Lightbulb, Zap, Store, Type, Star, Box,
  FileImage, Megaphone, Palette, Eye, CreditCard,
  BookOpen, FileText, Image, ShoppingBag, Building2,
  Car, Radio, Navigation, PenTool, ChevronRight, Home,
  MessageCircle,
} from 'lucide-react'

const services = [
  {
    icon: Layers,
    name: 'ACP Sign Boards',
    description: 'Aluminium composite panel boards are weather-resistant and provide a sleek, modern look for any business facade. Ideal for storefronts and commercial buildings.',
    color: '#1E3A8A',
    image: 'https://5.imimg.com/data5/SELLER/Default/2026/3/593347818/YE/PW/YL/45293610/acp-sign-board-500x500.jpg',
  },
  {
    icon: Lightbulb,
    name: 'Glow Sign Boards',
    description: 'Illuminated signage ensures your brand is visible 24/7. Our glow sign boards use energy-efficient lighting to keep your business noticed even after dark.',
    color: '#F59E0B',
    image: 'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
  },
  {
    icon: Zap,
    name: 'LED Sign Boards',
    description: 'Energy-efficient LED displays for maximum visual impact. Our LED boards are bright, long-lasting, and customizable for any branding requirement.',
    color: '#1D4ED8',
    image: 'https://4.imimg.com/data4/YM/JM/MY-12149095/led-sign-board-1000x1000.jpg',
  },
  {
    icon: Store,
    name: 'Shop Sign Boards',
    description: 'Custom shop front signs that instantly communicate your brand identity. We design and fabricate signage that drives footfall and brand recognition.',
    color: '#7C3AED',
    image: 'https://4.imimg.com/data4/NG/GC/MY-1937680/sign-board-1000x1000.jpg',
  },
  {
    icon: Type,
    name: 'Stainless Steel Letters',
    description: 'Premium metallic 3D lettering perfect for corporate offices, luxury showrooms, and high-end retail. Available with backlit or front-lit options.',
    color: '#64748B',
    image: 'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',
  },
  {
    icon: Star,
    name: 'Acrylic Letters',
    description: 'Vibrant colored acrylic letters that deliver stunning visual appeal. Lightweight, durable, and available in any color to match your brand.',
    color: '#EC4899',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/433496266/MY/ZF/KA/142456447/acp-with-acrylic-letters-1000x1000.jpg',
  },
  {
    icon: Box,
    name: '3D Letter Signage',
    description: 'Three-dimensional lettering creates depth and a bold visual impact. These signs stand out and create a premium impression for your brand.',
    color: '#059669',
    image: 'https://5.imimg.com/data5/KV/MU/OD/SELLER-14631917/3d-golden-letter-signage-board-1000x1000.jpg',
  },
  {
    icon: FileImage,
    name: 'Flex Banner Printing',
    description: 'High-resolution flex banners for outdoor advertising, events, exhibitions, and promotions. Durable, weather-resistant, and vibrant color output.',
    color: '#D97706',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
  },
  {
    icon: Radio,
    name: 'Hoardings',
    description: 'Large-format outdoor hoardings for maximum brand visibility in high-traffic areas. Perfect for product launches, brand awareness campaigns, and events.',
    color: '#1E3A8A',
    image: 'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
  },
  {
    icon: Palette,
    name: 'Vinyl Printing',
    description: 'Durable vinyl prints for walls, floors, glass, and vehicles. Versatile applications with long-lasting color and sharp detail reproduction.',
    color: '#0891B2',
    image: 'https://5.imimg.com/data5/MQ/LT/MY-4476066/vinyl-wrapping-sheet-1000x1000.jpg',
  },
  {
    icon: Eye,
    name: 'One Way Vision Printing',
    description: 'Glass and window graphics with one-way vision technology. Promote your brand on glass surfaces while maintaining visibility from inside.',
    color: '#6D28D9',
    image: 'https://5.imimg.com/data5/XB/VW/QU/SELLER-1940077/one-way-vision-printing-in-delhi-1000x1000.jpg',
  },
  {
    icon: CreditCard,
    name: 'Visiting Cards',
    description: 'Professional business card design and printing. High-quality cardstock options with matte, gloss, or spot UV finishes for a lasting impression.',
    color: '#1D4ED8',
    image: 'https://4.imimg.com/data4/HA/WV/MY-6578878/spice-company-visiting-card-500x500.jpg',
  },
  {
    icon: BookOpen,
    name: 'Brochures',
    description: 'Multi-page marketing brochure design and printing. From bi-fold to catalog formats, we create brochures that effectively communicate your offerings.',
    color: '#1E3A8A',
    image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/GS/ON/WX/13823199/brochure-printing-services-1000x1000.jpg',
  },
  {
    icon: FileText,
    name: 'Flyers',
    description: 'Eye-catching single-page promotional flyers for events, offers, and campaigns. Fast turnaround with high-quality offset and digital printing.',
    color: '#059669',
    image: 'https://5.imimg.com/data5/XE/QG/MY-11047000/cheap-flyer-printing-500x500.jpg',
  },
  {
    icon: Image,
    name: 'Posters',
    description: 'Large format poster printing for retail displays, events, and advertising campaigns. Available in multiple sizes with vivid color accuracy.',
    color: '#7C3AED',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316582468/HI/WX/CV/9417950/poster-printing-services-1000x1000.jpg',
  },
  {
    icon: ShoppingBag,
    name: 'Shop Branding',
    description: 'Complete shop interior and exterior branding solutions. From sign boards to wall graphics and display units, we transform your retail space.',
    color: '#F59E0B',
    image: 'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
  },
  {
    icon: Building2,
    name: 'Office Branding',
    description: 'Professional office wall graphics, reception signage, and interior branding. Create an inspiring and branded workspace for your team and clients.',
    color: '#64748B',
    image: 'https://www.e-arc.in/wp-content/uploads/2026/04/Office-Wall-Graphics.jpg',
  },
  {
    icon: Car,
    name: 'Vehicle Branding',
    description: 'Car and commercial vehicle wrapping and branding. Turn your fleet into moving billboards with eye-catching, durable vehicle graphics.',
    color: '#0891B2',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/ZY/AE/ID/30255346/vehicle-wrap-printing-service-1000x1000.jpeg',
  },
  {
    icon: Radio,
    name: 'Outdoor Advertising',
    description: 'Complete outdoor advertising campaign solutions including hoardings, bus shelters, kiosks, and transit media for maximum reach.',
    color: '#1E3A8A',
    image: 'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
  },
  {
    icon: Navigation,
    name: 'Indoor Signage',
    description: 'Wayfinding systems, reception signage, and interior signage solutions. Help visitors navigate your space with clear, branded directional signage.',
    color: '#1D4ED8',
    image: 'https://4.imimg.com/data4/KX/AK/MY-4263331/gcom-2-1000x1000.jpg',
  },
  {
    icon: PenTool,
    name: 'Graphic Design Services',
    description: 'Complete graphic design solutions for all your branding needs. Logo design, brand identity, and creative artworks for all print and digital formats.',
    color: '#EC4899',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/TT/XA/MM/111976666/graphic-design-services-1000x1000.jpg',
  },
]

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

export default function Services() {
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
      <section className="py-20 bg-[#F9FAFB]" aria-labelledby="services-grid-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block w-12 h-1 bg-[#1E3A8A] rounded mb-4" aria-hidden="true" />
            <h2 id="services-grid-heading" className="text-3xl font-black text-gray-900">
              21 Specialised Services
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Everything your business needs for visual branding, advertising, and signage — all under one roof.
            </p>
            <span className="inline-block mt-4 bg-[#1E3A8A] text-white text-xs font-bold px-3 py-1 rounded-full">21 Services Available</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <article
                key={service.name}
                id={toSlug(service.name)}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:-translate-y-1 flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${(i % 6) * 0.08}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Service icon top left */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: service.color }}>
                    <service.icon size={18} />
                  </div>
                  {/* WhatsApp green bar at bottom of image */}
                  <a
                    href={`https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(service.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-4 py-2.5 transition-colors justify-center"
                  >
                    <img src="/whatsapp-icon.avif" alt="WhatsApp" className="w-5 h-5 object-contain rounded-sm" />
                    Get Inquiry on WhatsApp
                  </a>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-base mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{service.description}</p>
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

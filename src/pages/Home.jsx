import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Shield, Palette, Clock, Wrench, Tag, MapPin,
  Layers, Lightbulb, Zap, Type, Star, Printer,
  MessageCircle, Phone, ChevronRight, ArrowRight,
  CheckCircle, Award, TrendingUp,
} from 'lucide-react'
import StatsBar from '../components/StatsBar'
import TestimonialCard from '../components/TestimonialCard'

const services = [
  {
    icon: Layers,
    name: 'ACP Sign Boards',
    description: 'Weather-resistant aluminium composite panel boards with a sleek modern look for any business facade.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2026/3/593347818/YE/PW/YL/45293610/acp-sign-board-500x500.jpg',
    color: '#DC2626',
  },
  {
    icon: Lightbulb,
    name: 'Glow Sign Boards',
    description: 'Illuminated signage that keeps your brand visible 24/7, even after dark.',
    image: 'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
    color: '#F59E0B',
  },
  {
    icon: Zap,
    name: 'LED Sign Boards',
    description: 'Energy-efficient LED displays delivering bright, vibrant, and long-lasting brand visibility.',
    image: 'https://4.imimg.com/data4/YM/JM/MY-12149095/led-sign-board-1000x1000.jpg',
    color: '#1D4ED8',
  },
  {
    icon: Type,
    name: 'Stainless Steel Letters',
    description: 'Premium 3D metallic lettering for corporate offices, showrooms, and luxury establishments.',
    image: 'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',
    color: '#64748B',
  },
  {
    icon: Star,
    name: 'Acrylic Letters',
    description: 'Vibrant colored acrylic letters for stunning visual appeal in retail and commercial spaces.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/7/433496266/MY/ZF/KA/142456447/acp-with-acrylic-letters-1000x1000.jpg',
    color: '#EC4899',
  },
  {
    icon: Printer,
    name: 'Flex Banner Printing',
    description: 'High-resolution flex banners for outdoor advertising, events, and major promotions.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
    color: '#059669',
  },
]

const whyChooseUs = [
  { icon: Shield, title: 'Premium Quality Materials', desc: 'Top-grade materials sourced to ensure durability, weather resistance, and a lasting professional look.', color: '#DC2626' },
  { icon: Palette, title: 'Custom Creative Designs', desc: 'Every sign is crafted uniquely — tailored to your brand identity, personality, and business goals.', color: '#1D4ED8' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'We respect your timelines. Projects are completed on schedule without compromising quality.', color: '#059669' },
  { icon: Wrench, title: 'Expert Installation', desc: 'Skilled technicians handle fabrication and on-site installation so you don\'t have to worry.', color: '#D97706' },
  { icon: Tag, title: 'Competitive Pricing', desc: 'Transparent, affordable rates for businesses of all sizes — from startups to enterprises.', color: '#7C3AED' },
  { icon: MapPin, title: 'Pan-India Service', desc: 'We serve clients across the country with reliable logistics, installation support, and service.', color: '#DB2777' },
]

const process = [
  { step: '01', title: 'Consultation', desc: 'Share your requirements, brand details, and location. We listen carefully to understand your exact needs.' },
  { step: '02', title: 'Design & Quote', desc: 'Our team creates custom design concepts and sends you a detailed, transparent quotation within 24 hours.' },
  { step: '03', title: 'Fabrication', desc: 'After your approval, we begin manufacturing using premium materials and precision craftsmanship.' },
  { step: '04', title: 'Installation', desc: 'Our technicians install the finished signage at your location safely, neatly, and professionally.' },
]

const featuredProjects = [
  {
    name: 'The Food Street Mall',
    location: 'Gurgaon',
    category: 'Shop Branding',
    image: 'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
  },
  {
    name: 'FMS Dental Hospital',
    location: 'Hyderabad',
    category: 'Glow Signs',
    image: 'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
  },
  {
    name: 'Puri Emporium',
    location: 'Delhi',
    category: '3D Letter Signage',
    image: 'https://5.imimg.com/data5/KV/MU/OD/SELLER-14631917/3d-golden-letter-signage-board-1000x1000.jpg',
  },
]

const testimonials = [
  {
    text: 'Excellent quality and timely delivery. New Crown Art transformed our shop front completely. The LED board brings in so many more customers now!',
    name: 'Rahul Sharma',
    location: 'Delhi',
  },
  {
    text: 'Very professional team. The glow sign board looks amazing and has dramatically increased our visibility. Outstanding value for money.',
    name: 'Priya Patel',
    location: 'Mumbai',
  },
  {
    text: 'Best signage company I have ever worked with. Affordable pricing, superb craftsmanship, and the installation team was excellent. Will definitely order again.',
    name: 'Amit Verma',
    location: 'Bangalore',
  },
]

const marqueeItems = [
  'ACP Sign Boards', 'Glow Signs', 'LED Boards', 'Steel Letters',
  'Acrylic Letters', 'Flex Printing', 'Hoardings', 'Shop Branding',
  'Vehicle Branding', 'Office Branding', 'Visiting Cards', 'Outdoor Advertising',
]

export default function Home() {
  useEffect(() => {
    document.title = 'New Crown Art — Premium Sign Boards, Branding & Printing Solutions'
  }, [])

  return (
    <>
      {/* ---- HERO ---- */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center"
        aria-label="Hero"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/32459951/pexels-photo-32459951/free-photo-of-vibrant-billboards-in-bustling-urban-street.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Directional overlay: dark left (text readable) → lighter right (billboard visible) */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(100deg, rgba(5,5,18,0.93) 0%, rgba(5,5,18,0.88) 38%, rgba(5,5,18,0.62) 62%, rgba(5,5,18,0.28) 100%)',
          }}
          aria-hidden="true"
        />
        {/* Bottom fade so footer transition is smooth */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(5,5,18,0.6) 0%, transparent 100%)' }}
          aria-hidden="true"
        />
        {/* Gold glow on the left behind headline */}
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 py-28 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            {/* Left: hero text — 3/5 width */}
            <div className="lg:col-span-3">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-wider uppercase animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" aria-hidden="true" />
                India's Trusted Signage Partner Since 2015
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-6 animate-fade-in-up">
                Your Brand{' '}
                <span className="gold-shimmer">Deserves</span>
                <br />to Stand Out
              </h1>

              <p className="text-gray-200 text-lg leading-relaxed mb-8 animate-fade-in-up animation-delay-200 max-w-xl">
                New Crown Art delivers premium sign boards, illuminated signage, flex printing, 3D letters, shop branding, and complete advertising solutions that make your business impossible to ignore.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-300">
                <Link
                  to="/quote"
                  className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-[#111827] text-base"
                  style={{ background: 'linear-gradient(135deg, #FFD700 0%, #C9A84C 50%, #A07832 100%)' }}
                >
                  Get Free Quote
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a
                  href="https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-base"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919934855079"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:border-white/60 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 text-base"
                >
                  <Phone size={18} aria-hidden="true" />
                  Call Now
                </a>
              </div>

              {/* Trust stats row */}
              <div className="flex flex-wrap gap-8 animate-fade-in-up animation-delay-400 pt-2 border-t border-white/10">
                {[
                  { val: '2000+', lbl: 'Projects Done' },
                  { val: '10,000+', lbl: 'Happy Clients' },
                  { val: '10+', lbl: 'Years Experience' },
                  { val: '21', lbl: 'Services' },
                ].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <p className="text-2xl font-black gold-shimmer">{val}</p>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mt-0.5">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: floating service showcase — 2/5 width, only on large screens */}
            <div className="hidden lg:flex lg:col-span-2 flex-col gap-4 animate-fade-in-up animation-delay-300">
              {/* Main featured image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-56">
                <img
                  src="https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg"
                  alt="Outdoor hoarding advertisement"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[#DC2626] text-white text-xs font-bold px-2.5 py-1 rounded-full">Hoardings</span>
                  <p className="text-white font-bold text-sm mt-1">Outdoor Advertising</p>
                </div>
              </div>
              {/* Two smaller images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden h-32 shadow-xl border border-white/10">
                  <img
                    src="https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg"
                    alt="Glow sign board"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <p className="absolute bottom-2 left-2 text-white text-xs font-bold">Glow Signs</p>
                </div>
                <div className="relative rounded-xl overflow-hidden h-32 shadow-xl border border-white/10">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg"
                    alt="Flex banner printing"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <p className="absolute bottom-2 left-2 text-white text-xs font-bold">Flex Banners</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce" aria-hidden="true">
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none"><path d="M7 0v14M1 8l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </section>

      {/* ---- MARQUEE TICKER ---- */}
      <div
        className="py-4 overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #DC2626 0%, #991B1B 50%, #DC2626 100%)' }}
        aria-hidden="true"
      >
        <div className="flex gap-8 whitespace-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-4">
              {item}
              <span className="text-white/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---- SERVICES GRID ---- */}
      <section className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-[#DC2626] font-bold text-xs uppercase tracking-widest">What We Offer</span>
              <h2 id="services-heading" className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
                Our Core Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#DC2626] font-bold text-sm hover:gap-3 transition-all"
            >
              View All 21 Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, name, description, image, color }, i) => (
              <article
                key={name}
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: color }}>
                    <Icon size={17} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
                  <a
                    href={`https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20need%20inquiry%20for%20${encodeURIComponent(name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-green-700 hover:text-green-800 transition-colors"
                  >
                    <MessageCircle size={14} /> Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- WHY CHOOSE US — DARK SECTION ---- */}
      <section
        className="py-20 relative overflow-hidden"
        aria-labelledby="why-heading"
        style={{ background: 'linear-gradient(135deg, #06060f 0%, #120303 50%, #06060f 100%)' }}
      >
        {/* Signage mosaic background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="grid grid-cols-6 h-full opacity-[0.09]">
            {[
              'https://5.imimg.com/data5/SELLER/Default/2026/3/593347818/YE/PW/YL/45293610/acp-sign-board-500x500.jpg',
              'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
              'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
              'https://5.imimg.com/data5/KV/MU/OD/SELLER-14631917/3d-golden-letter-signage-board-1000x1000.jpg',
              'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
              'https://4.imimg.com/data4/YM/JM/MY-12149095/led-sign-board-1000x1000.jpg',
            ].map((src, i) => (
              <div key={i} style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100%' }} />
            ))}
          </div>
          <div className="absolute inset-0" style={{ background: 'rgba(6,6,15,0.88)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(220,38,38,0.08) 0%, transparent 60%)',
        }} aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest">Why New Crown Art</span>
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
              The Difference You Can See
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We combine quality materials, creative design, and professional execution to deliver signage that truly represents your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group animate-fade-in-up"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(10px)',
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                  aria-hidden="true"
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- STATS ---- */}
      <StatsBar />

      {/* ---- HOW IT WORKS ---- */}
      <section className="py-20 bg-[#F9FAFB]" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#DC2626] font-bold text-xs uppercase tracking-widest">Our Process</span>
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-4">
              How We Work
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A simple, transparent process from your first inquiry to the final installation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#DC2626] to-[#C9A84C]" aria-hidden="true" />

            {process.map(({ step, title, desc }, i) => (
              <div key={step} className="relative text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-black text-lg shadow-lg relative z-10"
                  style={{ background: i === 0 ? '#DC2626' : i === 3 ? '#C9A84C' : '#111827' }}>
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Start Your Project Today
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---- FEATURED PROJECTS ---- */}
      <section className="py-20 bg-white" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-[#DC2626] font-bold text-xs uppercase tracking-widest">Our Work</span>
              <h2 id="projects-heading" className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-[#DC2626] font-bold text-sm hover:gap-3 transition-all"
            >
              View Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredProjects.map(({ name, location, category, image }, i) => (
              <article
                key={name}
                className="rounded-2xl overflow-hidden shadow-md group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
                    style={{ transition: 'transform 0.6s ease' }}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[#DC2626]/0 group-hover:bg-[#DC2626]/20 transition-colors duration-300" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#DC2626] text-white text-xs font-bold px-3 py-1.5 rounded-full">{category}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-black text-lg leading-tight">{name}</h3>
                    <p className="text-white/70 text-sm mt-1">{location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- TESTIMONIALS ---- */}
      <section
        className="py-20 relative overflow-hidden"
        aria-labelledby="testimonials-heading"
        style={{ background: 'linear-gradient(135deg, #06060f 0%, #0f0820 100%)' }}
      >
        {/* Signage mosaic background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="grid grid-cols-6 h-full opacity-[0.07]">
            {[
              'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
              'https://5.imimg.com/data5/SELLER/Default/2024/7/433496266/MY/ZF/KA/142456447/acp-with-acrylic-letters-1000x1000.jpg',
              'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
              'https://4.imimg.com/data4/NG/GC/MY-1937680/sign-board-1000x1000.jpg',
              'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
              'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',
            ].map((src, i) => (
              <div key={i} style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100%' }} />
            ))}
          </div>
          <div className="absolute inset-0" style={{ background: 'rgba(6,6,15,0.90)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest">Client Reviews</span>
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {testimonials.map(({ text, name, location }, i) => (
              <div
                key={name}
                className="rounded-2xl p-7 border border-white/10 relative animate-fade-in-up"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(8px)',
                  animationDelay: `${i * 0.12}s`,
                }}
              >
                {/* Quote mark */}
                <div className="text-6xl font-black text-[#DC2626]/30 leading-none mb-2 font-serif select-none" aria-hidden="true">"</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#DC2626] to-[#C9A84C] flex items-center justify-center text-white font-black text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{name}</p>
                    <p className="text-gray-500 text-xs">{location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA BANNER ---- */}
      <section
        className="py-24 relative overflow-hidden"
        aria-labelledby="cta-heading"
        style={{ background: 'linear-gradient(135deg, #06060f 0%, #0f0820 50%, #06060f 100%)' }}
      >
        {/* Mosaic background from signage work */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="grid grid-cols-5 h-full opacity-[0.08]">
            {[
              'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
              'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
              'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
              'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
              'https://4.imimg.com/data4/YM/JM/MY-12149095/led-sign-board-1000x1000.jpg',
            ].map((src, i) => (
              <div key={i} style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100%' }} />
            ))}
          </div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,6,15,0.92) 0%, rgba(15,8,32,0.88) 50%, rgba(6,6,15,0.92) 100%)' }} />
        </div>
        {/* Gold border top */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.6) 50%, transparent 100%)' }} aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
            <Award size={14} aria-hidden="true" /> Free Consultation Available
          </div>
          <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Make Your Business{' '}
            <span className="gold-shimmer">Unmissable?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free, detailed quotation for your signage, branding, or printing project. Our team responds within 24 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 font-black text-base px-10 py-4 rounded-xl transition-all duration-200 shadow-2xl hover:-translate-y-0.5 text-[#111827]"
              style={{ background: 'linear-gradient(135deg, #FFD700 0%, #C9A84C 50%, #A07832 100%)' }}
            >
              Get Free Quote
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <a
              href="tel:+919934855079"
              className="inline-flex items-center gap-2 border-2 border-[#C9A84C]/60 text-[#C9A84C] hover:bg-[#C9A84C]/10 font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone size={18} aria-hidden="true" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

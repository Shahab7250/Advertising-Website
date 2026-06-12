import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Target, Eye, Shield, Palette, Lightbulb,
  Heart, Award, Clock, ChevronRight, Home,
  Users, Star, ArrowRight, CheckCircle, Zap,
  Wrench, MapPin,
} from 'lucide-react'
import StatsBar from '../components/StatsBar'

const coreValues = [
  { icon: Shield, label: 'Quality First', desc: 'We never compromise on material quality or workmanship standards.', color: '#1E3A8A' },
  { icon: Palette, label: 'Creative Design', desc: 'Every design is crafted uniquely to represent your brand identity.', color: '#1D4ED8' },
  { icon: Lightbulb, label: 'Innovation', desc: 'We stay ahead with the latest techniques and premium materials.', color: '#F59E0B' },
  { icon: Heart, label: 'Client Satisfaction', desc: 'Your satisfaction and success is our ultimate goal always.', color: '#EC4899' },
  { icon: Award, label: 'Professionalism', desc: 'Highest standards in every interaction and project delivery.', color: '#7C3AED' },
  { icon: Clock, label: 'Timely Delivery', desc: 'We respect your timelines and deliver projects on schedule.', color: '#059669' },
]

const milestones = [
  { year: '2015', title: 'Company Founded', desc: 'New Crown Art was established in Gaya, Bihar, with a vision to deliver premium signage solutions.' },
  { year: '2017', title: "Gaya's Most Trusted Signage Shop", desc: 'Became the most recommended offline signage and advertising workshop in Gaya, Bihar — known locally for unmatched quality and reliability.' },
  { year: '2020', title: '1000+ Projects Milestone', desc: 'Successfully completed over 1,000 projects across various industries and business types.' },
  { year: '2023', title: '10+ Years Excellence', desc: 'Celebrated a decade of delivering quality signage and branding solutions across India.' },
  { year: '2025', title: '2000+ Happy Clients', desc: 'Reached 2000+ successful projects with 10,000+ satisfied clients nationwide.' },
]

const workshopHighlights = [
  {
    icon: Wrench,
    title: 'In-House Manufacturing',
    desc: 'Every sign board, flex banner, and acrylic letter is crafted right here in our Gaya workshop — full quality control from raw material to finished product.',
    color: '#0D9488',
    gradient: 'from-teal-50 to-white',
    link: null,
  },
  {
    icon: MapPin,
    title: 'Walk-In Welcome',
    desc: 'Visit our workshop at Gaya, Bihar anytime. See materials, discuss your project face-to-face, and get an instant quote — no appointment needed.',
    color: '#059669',
    gradient: 'from-green-50 to-white',
    link: 'https://www.google.com/maps?q=24.7947613,85.0075443',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    desc: 'Local production means faster delivery. Most projects are completed within 3–7 working days with same-day emergency services available on request.',
    color: '#D97706',
    gradient: 'from-amber-50 to-white',
    link: null,
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'About Us — New Crown Art | Signage & Advertising Company'
  }, [])

  return (
    <>
      {/* Hero */}
      <section
        className="py-24 relative overflow-hidden"
        aria-label="About hero"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/4913828/pexels-photo-4913828.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        {/* Dark gradient overlay — left side darker for text, right shows billboard */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(100deg, rgba(4,4,16,0.88) 0%, rgba(4,4,16,0.82) 40%, rgba(4,4,16,0.55) 70%, rgba(4,4,16,0.30) 100%)',
        }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)',
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
              <li className="text-white font-medium">About Us</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-5">
              <span className="w-8 h-0.5 bg-[#C9A84C]" aria-hidden="true" />
              About New Crown Art
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              A Decade of Crafting{' '}
              <span className="gold-shimmer">Visual Excellence</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              New Crown Art is Gaya's most trusted name in signage, advertising, and branding. We turn your brand vision into powerful visual experiences that leave a lasting impression.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl text-[#111827] transition-all hover:-translate-y-0.5 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #FFD700 0%, #C9A84C 100%)' }}
              >
                Get Free Quote <ArrowRight size={17} />
              </Link>
              <a
                href="tel:+919934855079"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 font-bold px-7 py-3.5 rounded-xl transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white" aria-labelledby="about-text-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1E3A8A] font-bold text-xs uppercase tracking-widest">Who We Are</span>
              <h2 id="about-text-heading" className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-6">
                Your Trusted Partner in Signage & Branding
              </h2>
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                <p>
                  New Crown Art is a trusted name in advertising, signage manufacturing, and branding solutions based in Gaya, Bihar. We specialize in designing, manufacturing, and installing high-quality sign boards, ACP boards, glow signs, stainless steel letters, acrylic letters, flex banners, hoardings, and complete advertising materials.
                </p>
                <p>
                  Our mission is to provide creative, durable, and impactful advertising solutions that help businesses attract customers and build a strong brand identity. We combine innovative design, premium materials, and skilled craftsmanship to deliver signage that stands out.
                </p>
                <p>
                  Whether you're opening a new shop, upgrading your storefront, or launching a marketing campaign — New Crown Art provides complete signage and branding services tailored to your exact requirements.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle, text: 'Premium quality materials', color: '#1E3A8A' },
                  { icon: CheckCircle, text: 'Pan-India service coverage', color: '#1E3A8A' },
                  { icon: CheckCircle, text: 'On-time project delivery', color: '#1E3A8A' },
                  { icon: CheckCircle, text: 'Expert design consultation', color: '#1E3A8A' },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <Icon size={16} style={{ color }} className="shrink-0" aria-hidden="true" />
                    {text}
                  </div>
                ))}
              </div>

              <Link
                to="/quote"
                className="inline-flex items-center gap-2 bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold px-7 py-3.5 rounded-xl transition-all mt-8 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'ACP Sign Boards', src: '/about/acp-board.jpg' },
                { label: 'Glow Sign Boards', src: '/about/glow-sign.jpg' },
                { label: '3D Letter Signage', src: '/about/3d-signage.jpg' },
                { label: 'Shop Branding', src: '/about/shop-branding.jpg' },
              ].map(({ label, src }) => (
                <div key={label} className="rounded-2xl overflow-hidden h-52 relative group">
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-xs font-bold bg-[#0D9488] px-2.5 py-1 rounded-full">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Milestones / Timeline */}
      <section
        className="py-20 relative overflow-hidden"
        aria-labelledby="milestones-heading"
        style={{ background: 'linear-gradient(135deg, #0a0a16 0%, #060c1a 50%, #0a0a16 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="grid grid-cols-5 h-full opacity-[0.18]">
            {[
              'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
              'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
              'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
              'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
              'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',
            ].map((src, i) => (
              <div key={i} style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100%' }} />
            ))}
          </div>
          <div className="absolute inset-0" style={{ background: 'rgba(10,10,22,0.80)' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="text-[#C9A84C] font-bold text-xs uppercase tracking-widest">Our Journey</span>
            <h2 id="milestones-heading" className="text-3xl sm:text-4xl font-black text-white mt-3">
              10 Years of Growth
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1E3A8A] via-[#C9A84C] to-[#1E3A8A]" aria-hidden="true" />

            <div className="space-y-8">
              {milestones.map(({ year, title, desc }, i) => (
                <div
                  key={year}
                  className={`flex gap-6 sm:gap-0 items-start relative animate-fade-in-up ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Content */}
                  <div className={`pl-12 sm:pl-0 sm:w-[45%] ${i % 2 === 0 ? 'sm:text-right sm:pr-10' : 'sm:pl-10'}`}>
                    <div
                      className="inline-block bg-[#1E3A8A] text-white text-xs font-black px-3 py-1.5 rounded-full mb-2 tracking-wider"
                    >
                      {year}
                    </div>
                    <h3 className="text-white font-bold text-base mb-1">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-3 sm:left-1/2 sm:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-[#C9A84C] bg-[#0a0a16] shrink-0 mt-0.5" aria-hidden="true" />

                  {/* Spacer for other side */}
                  <div className="hidden sm:block sm:w-[45%]" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F9FAFB]" aria-labelledby="mission-vision-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E3A8A] font-bold text-xs uppercase tracking-widest">Purpose & Direction</span>
            <h2 id="mission-vision-heading" className="text-3xl sm:text-4xl font-black text-gray-900 mt-3">
              Our Mission &amp; Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0D9488]/12 to-white rounded-2xl p-8 shadow-sm border-2 border-[#0D9488]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-[#0D9488] to-[#14B8A6]" />
              <div className="w-14 h-14 bg-[#0D9488] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Target size={28} className="text-white" aria-hidden="true" />
              </div>
              <span className="inline-block bg-[#0D9488] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wider uppercase">Mission</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To help businesses increase their visibility and brand recognition through high-quality signage, printing, and branding solutions. We strive to be the most reliable and creative advertising partner for every client.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#C9A84C]/12 to-white rounded-2xl p-8 shadow-sm border-2 border-[#C9A84C]/35 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-[#C9A84C] to-[#FFD700]" />
              <div className="w-14 h-14 bg-gradient-to-br from-[#C9A84C] to-[#A07832] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Eye size={28} className="text-white" aria-hidden="true" />
              </div>
              <span className="inline-block bg-gradient-to-r from-[#C9A84C] to-[#A07832] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wider uppercase">Vision</span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become one of the most trusted and innovative signage solution providers in India by delivering exceptional quality and customer satisfaction — leading through creativity, technology, and unmatched service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E3A8A] font-bold text-xs uppercase tracking-widest">What We Stand For</span>
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-black text-gray-900 mt-3">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map(({ icon: Icon, label, desc, color }, i) => (
              <div
                key={label}
                className="rounded-2xl p-6 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white group animate-fade-in-up relative overflow-hidden"
                style={{ borderColor: `${color}30`, animationDelay: `${i * 0.08}s` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: color }} />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                  style={{ backgroundColor: `${color}18`, border: `1.5px solid ${color}30` }}
                  aria-hidden="true"
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 text-white" style={{ backgroundColor: color }}>
                  {label}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Highlights */}
      <section className="py-20 bg-[#F9FAFB]" aria-labelledby="workshop-heading">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#1E3A8A] font-bold text-xs uppercase tracking-widest">Why Come to Us</span>
            <h2 id="workshop-heading" className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-3">
              Your Local Signage Workshop in Gaya
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              We are a fully offline workshop — walk in, see our work, discuss your needs, and get it done right here in Gaya, Bihar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {workshopHighlights.map(({ icon: Icon, title, desc, color, gradient, link }, i) => (
              <div
                key={title}
                className={`bg-gradient-to-br ${gradient} rounded-2xl p-7 shadow-sm border-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up`}
                style={{ borderColor: `${color}30`, animationDelay: `${i * 0.1}s` }}
              >
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open location in Google Maps"
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md cursor-pointer hover:opacity-90"
                    style={{ backgroundColor: color, border: `1.5px solid ${color}` }}
                  >
                    <Icon size={26} className="text-white" />
                  </a>
                ) : (
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  >
                    <Icon size={26} className="text-white" />
                  </div>
                )}
                <div className="w-8 h-1 rounded-full mb-4" style={{ backgroundColor: color }} />
                <h3 className="font-black text-gray-900 text-lg mb-3">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold mt-3 hover:underline"
                    style={{ color }}
                  >
                    <MapPin size={13} />
                    View on Google Maps
                  </a>
                )}
              </div>
            ))}
          </div>
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
              'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
              'https://5.imimg.com/data5/KV/MU/OD/SELLER-14631917/3d-golden-letter-signage-board-1000x1000.jpg',
              'https://4.imimg.com/data4/YM/JM/MY-12149095/led-sign-board-1000x1000.jpg',
            ].map((src, i) => (
              <div key={i} style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100%' }} />
            ))}
          </div>
          <div className="absolute inset-0" style={{ background: 'rgba(6,6,15,0.88)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 50%, transparent 100%)' }} aria-hidden="true" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Let's Build Something Remarkable</h2>
          <p className="text-gray-300 text-lg mb-8">
            Ready to transform your brand's visual identity? Get a free consultation and quote today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 font-black px-8 py-4 rounded-xl transition-all shadow-xl hover:-translate-y-0.5 text-[#111827]"
              style={{ background: 'linear-gradient(135deg, #FFD700 0%, #C9A84C 100%)' }}
            >
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C]/10 font-bold px-8 py-4 rounded-xl transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

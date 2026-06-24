import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, X } from 'lucide-react'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <img src="/whatsapp-icon.avif" alt="WhatsApp" width="16" height="16" aria-hidden="true" style={{ objectFit: 'contain' }} />
)

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Get Quote', to: '/quote' },
  { label: 'Contact', to: '/contact' },
]

const servicesList = [
  { label: 'ACP Sign Boards',          image: '/services/acp-sign-board.jpg' },
  { label: 'Glow Sign Boards',         image: '/services/glow-sign-board.jpg' },
  { label: 'LED Sign Boards',          image: '/services/led-sign-board.jpg' },
  { label: 'Shop Sign Boards',         image: '/services/shop-sign-board.jpg' },
  { label: 'Stainless Steel Letters',  image: '/services/stainless-steel-letters.jpg' },
  { label: 'Acrylic Letters',          image: '/services/acrylic-letters.jpg' },
  { label: '3D Letter Signage',        image: '/services/3d-letter-signage.jpg' },
  { label: 'Flex Banner Printing',     image: '/services/flex-banner.jpg' },
  { label: 'Hoardings',                image: '/services/hoardings.jpg' },
  { label: 'Vinyl Printing',           image: '/services/vinyl-printing.jpg' },
  { label: 'One Way Vision Printing',  image: '/services/one-way-vision.jpg' },
  { label: 'Visiting Cards',           image: '/services/visiting-cards.jpg' },
  { label: 'Brochures',                image: '/services/brochures.jpg' },
  { label: 'Flyers',                   image: '/services/flyers.jpg' },
  { label: 'Posters',                  image: '/services/posters.jpg' },
  { label: 'Shop Branding',            image: '/services/shop-branding.jpg' },
  { label: 'Office Branding',          image: '/services/office-branding.jpg' },
  { label: 'Vehicle Branding',         image: '/services/vehicle-branding.jpg' },
  { label: 'Outdoor Advertising',      image: '/services/outdoor-advertising.jpg' },
  { label: 'Indoor Signage',           image: '/services/indoor-signage.jpg' },
  { label: 'Graphic Design Services',  image: '/services/graphic-design.jpg' },
]

export default function Footer() {
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setActiveService(null) }
    if (activeService) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeService])

  return (
    <>
      {/* Service image modal */}
      {activeService && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActiveService(null)}
        >
          <div
            className="relative bg-[#111827] rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeService.image}
              alt={activeService.label}
              className="w-full object-cover max-h-80"
            />
            <div className="p-5">
              <h3 className="text-white font-bold text-lg mb-1">{activeService.label}</h3>
              <p className="text-gray-400 text-sm mb-4">Premium quality {activeService.label.toLowerCase()} by New Crown Art, Gaya, Bihar.</p>
              <div className="flex gap-3">
                <a
                  href={`https://api.whatsapp.com/send/?phone=919934855079&text=Hello%20New%20Crown%20Art%2C%20I%20need%20a%20quote%20for%20${encodeURIComponent(activeService.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <MessageCircle size={15} />
                  Get Quote on WhatsApp
                </a>
                <button
                  onClick={() => setActiveService(null)}
                  className="px-4 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-3 right-3 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

    <footer className="bg-[#111827] text-gray-300" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="New Crown Art Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-[#C9A84C]"
              />
              <div className="leading-tight">
                <span className="block font-black text-lg text-white tracking-tight">NEW CROWN</span>
                <span className="block font-semibold text-[11px] text-[#60A5FA] tracking-widest uppercase -mt-0.5">ART</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-300 mb-5">
              Premium signage, advertising, and branding solutions. We help businesses build a strong visual presence with high-quality sign boards, hoardings, and printing services.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/share/1GNcngC8xJ/', hoverColor: 'hover:bg-[#1877F2]' },
                { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/newcrown8550?igsh=aTliMnV2MWg3Z2hm', hoverColor: 'hover:bg-[#E1306C]' },
                { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=919934855079&text=Hello%20New%20Crown%20Art%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20my%20project.', hoverColor: 'hover:bg-[#25D366]' },
              ].map(({ icon: Icon, label, href, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg bg-gray-800 ${hoverColor} flex items-center justify-center transition-colors duration-200`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white font-bold text-base mb-5 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#1E3A8A]" aria-hidden="true" />
            </h2>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-300 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                  >
                    <ArrowRight size={13} aria-hidden="true" className="text-[#60A5FA]" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services — spans 2 columns to fit all 21 */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-white font-bold text-base mb-5 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#1E3A8A]" aria-hidden="true" />
            </h2>
            <ul className="grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-2">
              {servicesList.map(({ label, image }) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => setActiveService({ label, image })}
                    className="text-sm text-gray-300 hover:text-white inline-flex items-center gap-1.5 transition-all duration-200 group cursor-pointer text-left"
                  >
                    <ArrowRight size={13} aria-hidden="true" className="text-[#60A5FA] group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white font-bold text-base mb-5 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#1E3A8A]" aria-hidden="true" />
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.google.com/maps/place/New+Crown+Art/@24.7950271,85.007296,20z/data=!4m10!1m2!2m1!1snew+crown+art+gaya+bihar!3m6!1s0x39f32b000d6c2be1:0x2025f26c80d807da!8m2!3d24.7947613!4d85.0075443!15sChhuZXcgY3Jvd24gYXJ0IGdheWEgYmloYXKSARJhZHZlcnRpc2luZ19hZ2VuY3ngAQA!16s%2Fg%2F11z8n5my8s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group cursor-pointer hover:bg-white/5 rounded-lg px-1 py-1 -mx-1 transition-all duration-200"
                >
                  <MapPin size={16} className="text-[#60A5FA] group-hover:text-[#0D9488] mt-0.5 shrink-0 transition-colors duration-200" />
                  <span className="text-sm text-gray-300 group-hover:text-white group-hover:underline transition-all duration-200">
                    New Crown Art, Gaya,<br />Bihar - 823001
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+919934855079" className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 rounded-lg px-1 py-1 -mx-1 transition-all duration-200">
                  <Phone size={16} className="text-[#60A5FA] group-hover:text-[#0D9488] shrink-0 transition-colors duration-200" />
                  <span className="text-sm text-gray-300 group-hover:text-white group-hover:underline transition-all duration-200">
                    +91 99348 55079
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:newcrown8550@gmail.com" className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 rounded-lg px-1 py-1 -mx-1 transition-all duration-200">
                  <Mail size={16} className="text-[#60A5FA] group-hover:text-[#0D9488] shrink-0 transition-colors duration-200" />
                  <span className="text-sm text-gray-300 group-hover:text-white group-hover:underline transition-all duration-200">
                    newcrown8550@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=919934855079&text=Hello%20New%20Crown%20Art%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 rounded-lg px-1 py-1 -mx-1 transition-all duration-200"
                >
                  <MessageCircle size={16} className="text-green-400 group-hover:text-green-300 shrink-0 transition-colors duration-200" />
                  <span className="text-sm text-gray-300 group-hover:text-green-400 group-hover:underline transition-all duration-200">
                    WhatsApp: +91 99348 55079
                  </span>
                </a>
              </li>
              <li className="mt-2 p-3 bg-gray-800 rounded-lg">
                <p className="text-xs text-gray-400 font-medium">Working Hours</p>
                <p className="text-sm text-white mt-0.5">Mon – Sat: 9:00 AM – 7:00 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">
            &copy; 2026 New Crown Art. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-400">
            Advertising | Signage | Branding | Printing
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}

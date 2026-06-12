import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#111827] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="hidden sm:flex items-center gap-2 text-gray-300">
            <Phone size={13} aria-hidden="true" />
            <a href="tel:+919934855079" className="hover:text-white transition-colors">
              +91 99348 55079
            </a>
          </span>
          <span className="text-gray-300 text-xs">
            Mon-Sat: 9:00 AM – 7:00 PM | Pan-India Service
          </span>
          <div className="hidden sm:flex items-center gap-4">
            <a href="https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20my%20project." target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors">
              <MessageCircle size={13} aria-hidden="true" /> WhatsApp
            </a>
            <span className="text-gray-300 text-xs">newcrown8550@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="New Crown Art — Home">
          <img
            src="/logo.png"
            alt="New Crown Art Logo"
            className="h-14 w-14 rounded-full object-cover shadow-sm ring-2 ring-[#C9A84C] group-hover:ring-[#1E3A8A] transition-all duration-200 flex-shrink-0"
          />
          <div className="leading-tight">
            <span className="block font-black text-lg text-[#111827] tracking-tight">
              NEW CROWN
            </span>
            <span className="block font-semibold text-[11px] text-[#1E3A8A] tracking-widest uppercase -mt-0.5">
              ART
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `nav-link text-sm font-medium transition-colors pb-0.5 ${
                    isActive
                      ? 'text-[#1E3A8A] active'
                      : 'text-gray-700 hover:text-[#1E3A8A]'
                  }`
                }
                end={to === '/'}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA button + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/quote"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get Free Quote
          </Link>
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="border-t border-gray-100 bg-white px-4 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-[#1E3A8A]'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#1E3A8A]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/quote"
                className="block text-center bg-[#1E3A8A] hover:bg-[#1E40AF] text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors"
              >
                Get Free Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

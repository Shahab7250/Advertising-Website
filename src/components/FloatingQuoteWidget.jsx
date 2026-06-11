import { useState } from 'react'
import { X, MessageCircle, Phone, ChevronRight, Zap } from 'lucide-react'

const serviceOptions = [
  'ACP Sign Boards', 'Glow Sign Boards', 'LED Sign Boards',
  'Stainless Steel Letters', 'Acrylic Letters', '3D Letter Signage',
  'Flex Banner Printing', 'Hoardings', 'Shop Branding',
  'Office Branding', 'Vehicle Branding', 'Visiting Cards',
  'Graphic Design Services', 'Other',
]

export default function FloatingQuoteWidget() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleWhatsApp = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    const msg = `Hello New Crown Art! 👋\n\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || 'Not specified'}\n\nPlease send me a quote.`
    window.open(`https://wa.me/919934855079?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', phone: '', service: '' }); setOpen(false) }, 2500)
  }

  return (
    <>
      {/* ── Desktop floating widget ── */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col items-end gap-2">

        {/* Quick Quote panel */}
        <div
          className={`transition-all duration-300 origin-right ${
            open ? 'opacity-100 scale-x-100 translate-x-0' : 'opacity-0 scale-x-0 translate-x-4 pointer-events-none'
          }`}
          style={{ width: 280 }}
        >
          <div className="bg-white rounded-l-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3"
              style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)' }}>
              <div className="flex items-center gap-2">
                <Zap size={15} className="text-[#C9A84C]" />
                <span className="text-white font-black text-sm">Quick Quote</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors" aria-label="Close">
                <X size={16} />
              </button>
            </div>

            {sent ? (
              <div className="p-5 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle size={22} className="text-green-600" />
                </div>
                <p className="font-bold text-gray-900 text-sm">Opening WhatsApp!</p>
                <p className="text-gray-500 text-xs mt-1">We'll respond within minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleWhatsApp} className="p-4 space-y-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name *"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Mobile Number *"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-[#1E3A8A] focus:bg-white transition-colors text-gray-600"
                  >
                    <option value="">Select Service</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-sm py-2.5 rounded-lg transition-colors"
                >
                  <MessageCircle size={15} />
                  Send via WhatsApp
                </button>
                <p className="text-center text-[10px] text-gray-400">We reply within minutes during business hours</p>
              </form>
            )}
          </div>
        </div>

        {/* Trigger tab */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Get Quick Quote"
          className="flex items-center gap-2 text-white font-black text-xs px-3 py-3 rounded-l-xl shadow-xl transition-all duration-300 hover:px-4"
          style={{
            background: open
              ? 'linear-gradient(135deg, #374151 0%, #111827 100%)'
              : 'linear-gradient(135deg, #C9A84C 0%, #A07832 100%)',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          {open ? <X size={14} /> : <><Zap size={14} /><span>GET QUOTE</span></>}
        </button>

        {/* WhatsApp quick button */}
        <a
          href="https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20would%20like%20to%20get%20a%20quotation."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-11 h-11 bg-green-500 hover:bg-green-600 text-white rounded-l-xl flex items-center justify-center shadow-lg transition-all duration-200 hover:w-12 relative"
        >
          <MessageCircle size={20} />
          <span className="absolute inset-0 rounded-l-xl bg-green-400 animate-ping opacity-20" aria-hidden="true" />
        </a>

        {/* Phone quick button */}
        <a
          href="tel:+919934855079"
          aria-label="Call us"
          className="w-11 h-11 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white rounded-l-xl flex items-center justify-center shadow-lg transition-all duration-200 hover:w-12"
        >
          <Phone size={18} />
        </a>
      </div>

      {/* ── Mobile sticky bottom bar ── */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-40 flex" style={{ boxShadow: '0 -2px 16px rgba(0,0,0,0.15)' }}>
        <a
          href="tel:+919934855079"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#1E3A8A] text-white py-3.5 font-bold text-sm"
        >
          <Phone size={16} /> Call Now
        </a>
        <a
          href="https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20would%20like%20to%20get%20a%20quotation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 text-white py-3.5 font-bold text-sm"
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
        <a
          href="/quote"
          className="flex-1 flex items-center justify-center gap-1.5 text-[#111827] py-3.5 font-bold text-sm"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #A07832)' }}
        >
          <Zap size={16} /> Get Quote
        </a>
      </div>
    </>
  )
}

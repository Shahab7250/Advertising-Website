import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home, Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle } from 'lucide-react'

const subjectOptions = [
  'General Inquiry',
  'Request Quote',
  'Complaint',
  'Partnership',
]

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'New Crown Art, Gaya, Bihar - 823001', href: 'https://www.google.com/maps/place/New+Crown+Art/@24.7950271,85.007296,20z/data=!4m10!1m2!2m1!1snew+crown+art+gaya+bihar!3m6!1s0x39f32b000d6c2be1:0x2025f26c80d807da!8m2!3d24.7947613!4d85.0075443!15sChhuZXcgY3Jvd24gYXJ0IGdheWEgYmloYXKSARJhZHZlcnRpc2luZ19hZ2VuY3ngAQA!16s%2Fg%2F11z8n5my8s' },
  { icon: Phone, label: 'Phone', value: '+91 99348 55079', href: 'tel:+919934855079' },
  { icon: Mail, label: 'Email', value: 'newcrown8550@gmail.com', href: 'mailto:newcrown8550@gmail.com' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 99348 55079', href: 'https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20have%20a%20query%20about%20my%20order.' },
  { icon: Clock, label: 'Working Hours', value: 'Monday – Saturday: 9:00 AM – 7:00 PM', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'Contact Us — New Crown Art | Get In Touch'
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.phone.trim()) errs.phone = 'Phone number is required.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((errs) => ({ ...errs, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <>
      {/* Page header */}
      <section
        className="py-24 relative overflow-hidden"
        aria-label="Page header"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/30490769/pexels-photo-30490769.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        {/* Directional overlay — left darker for text, right shows billboard poster */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(100deg, rgba(4,4,16,0.88) 0%, rgba(4,4,16,0.80) 40%, rgba(4,4,16,0.52) 70%, rgba(4,4,16,0.28) 100%)',
        }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 80% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)',
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
              <li className="text-white font-medium">Contact</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-5">
              <span className="w-8 h-0.5 bg-[#C9A84C]" aria-hidden="true" />
              We're Here to Help
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Let's <span className="gold-shimmer">Talk Business</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Get in touch for inquiries, quotes, and project support. Our team is available Monday to Saturday, 9AM to 7PM.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left — Contact Info */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">New Crown Art</h2>
              <p className="text-gray-500 text-sm mb-8">
                Premium signage, advertising &amp; branding solutions across India.
              </p>

              {/* Contact items */}
              <div className="space-y-5 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-[#DC2626] group-hover:bg-red-700 rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5 transition-colors duration-200 group-hover:scale-110 transform">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                        <p className="text-sm text-gray-800 group-hover:text-[#DC2626] transition-colors font-medium">{value}</p>
                      </div>
                    </a>
                  ) : (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#DC2626] rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                        <p className="text-sm text-gray-800 font-medium">{value}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Map */}
              <div className="mt-6 rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <iframe
                  src="https://maps.google.com/maps?q=New+Crown+Art,+Gaya,+Bihar&output=embed&z=17"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  title="New Crown Art Location — Gaya, Bihar"
                />
                <div className="bg-white px-4 py-3 flex items-center gap-2">
                  <MapPin size={15} className="text-[#DC2626] shrink-0" aria-hidden="true" />
                  <a
                    href="https://www.google.com/maps/place/New+Crown+Art/@24.7950271,85.007296,20z/data=!4m10!1m2!2m1!1snew+crown+art+gaya+bihar!3m6!1s0x39f32b000d6c2be1:0x2025f26c80d807da!8m2!3d24.7947613!4d85.0075443!15sChhuZXcgY3Jvd24gYXJ0IGdheWEgYmloYXKSARJhZHZlcnRpc2luZ19hZ2VuY3ngAQA!16s%2Fg%2F11z8n5my8s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#DC2626] font-semibold hover:underline"
                  >
                    View New Crown Art on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center h-full flex flex-col items-center justify-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5 mx-auto">
                    <CheckCircle size={32} className="text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Thank you, <strong>{form.name}</strong>! We'll get back to you within 24 hours.
                  </p>
                  <a
                    href="https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20have%20a%20query%20about%20my%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    <MessageCircle size={18} aria-hidden="true" /> Continue on WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', subject: '', message: '' }) }}
                    className="mt-3 text-sm text-[#DC2626] hover:text-red-700 font-semibold transition-colors block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                  aria-label="Contact form"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Send Inquiry</h2>
                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Name <span className="text-[#DC2626]" aria-label="required">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 focus:border-[#DC2626] ${
                          errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1" role="alert">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone <span className="text-[#DC2626]" aria-label="required">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.phone}
                          placeholder="+91 99348 55079"
                          className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 focus:border-[#DC2626] ${
                            errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-600 mt-1" role="alert">{errors.phone}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="email@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 focus:border-[#DC2626]"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 focus:border-[#DC2626]"
                      >
                        <option value="">Select subject...</option>
                        {subjectOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message <span className="text-[#DC2626]" aria-label="required">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        rows={5}
                        placeholder="Tell us about your inquiry, project details, or any questions you have..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#DC2626]/30 focus:border-[#DC2626] resize-none ${
                          errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                        }`}
                      />
                      {errors.message && <p className="text-xs text-red-600 mt-1" role="alert">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#DC2626] hover:bg-red-700 disabled:opacity-70 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <ChevronRight size={18} aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

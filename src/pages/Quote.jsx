import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ChevronRight, Home, CheckCircle, Phone, MessageCircle, Clock, Star, Upload } from 'lucide-react'

const serviceOptions = [
  'ACP Sign Boards', 'Glow Sign Boards', 'LED Sign Boards', 'Shop Sign Boards',
  'Stainless Steel Letters', 'Acrylic Letters', '3D Letter Signage',
  'Flex Banner Printing', 'Hoardings', 'Vinyl Printing', 'One Way Vision Printing',
  'Visiting Cards', 'Brochures', 'Flyers', 'Posters', 'Shop Branding',
  'Office Branding', 'Vehicle Branding', 'Outdoor Advertising', 'Indoor Signage',
  'Graphic Design Services',
]

const materialOptions = ['ACP', 'Acrylic', 'Stainless Steel', 'Flex', 'Vinyl', 'LED', 'Other']

const budgetOptions = [
  'Under ₹5,000',
  '₹5,000 – ₹15,000',
  '₹15,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  'Above ₹1,00,000',
]

const benefits = [
  { icon: CheckCircle, text: 'Free, no-obligation quotation' },
  { icon: CheckCircle, text: 'Response within 24 hours' },
  { icon: CheckCircle, text: 'Expert consultation included' },
  { icon: CheckCircle, text: 'Competitive & transparent pricing' },
  { icon: CheckCircle, text: 'Pan-India delivery & installation' },
]

const initialForm = {
  name: '',
  mobile: '',
  email: '',
  businessName: '',
  city: '',
  service: '',
  material: '',
  size: '',
  quantity: '',
  budget: '',
  details: '',
  file: null,
  logo: null,
}

export default function Quote() {
  const [searchParams] = useSearchParams()
  const [form, setForm] = useState({
    ...initialForm,
    service: searchParams.get('service') || '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    document.title = 'Get Free Quote — New Crown Art'
  }, [])

  // Update service if URL param changes
  useEffect(() => {
    const svc = searchParams.get('service')
    if (svc) setForm((f) => ({ ...f, service: svc }))
  }, [searchParams])

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.mobile.trim()) errs.mobile = 'Mobile number is required.'
    else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g, '')))
      errs.mobile = 'Enter a valid 10-digit Indian mobile number.'
    if (!form.city.trim()) errs.city = 'City is required.'
    if (!form.service) errs.service = 'Please select a service.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files) {
      setForm((f) => ({ ...f, [name]: files[0] }))
    } else {
      setForm((f) => ({ ...f, [name]: value }))
    }
    setErrors((errs) => ({ ...errs, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      // Scroll to first error
      const firstErrField = document.querySelector('[aria-invalid="true"]')
      if (firstErrField) firstErrField.focus()
      return
    }
    setSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 bg-[#F9FAFB]">
        <div className="max-w-md mx-auto px-4 text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" aria-hidden="true" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
            Quote Request Received!
          </h1>
          <p className="text-gray-600 mb-2">
            Thank you, <strong>{form.name}</strong>! We'll contact you within 24 hours.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Our team will review your requirements and get back to you on{' '}
            <strong>{form.mobile}</strong> with a detailed quotation.
          </p>
          <a
            href="https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20have%20submitted%20a%20quotation%20request%20and%20would%20like%20to%20follow%20up."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
          >
            <MessageCircle size={20} aria-hidden="true" />
            Continue on WhatsApp
          </a>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1E40AF] transition-colors"
            >
              Back to Home
            </Link>
            <button
              type="button"
              onClick={() => { setSubmitted(false); setForm(initialForm) }}
              className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Page header */}
      <section
        className="py-24 relative overflow-hidden"
        aria-label="Page header"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/4913828/pexels-photo-4913828.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(100deg, rgba(4,4,16,0.88) 0%, rgba(4,4,16,0.80) 40%, rgba(4,4,16,0.52) 70%, rgba(4,4,16,0.28) 100%)',
        }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 60%)',
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
              <li className="text-white font-medium">Get Quote</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-5">
              <span className="w-8 h-0.5 bg-[#C9A84C]" aria-hidden="true" />
              Free, No-Obligation Quote
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Get Your <span className="gold-shimmer">Free Quotation</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fill in your requirements and we'll send a detailed quote within 24 hours. No obligations, completely free.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
                aria-label="Quote request form"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">Your Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-[#1E3A8A]" aria-label="required">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] ${
                        errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                      }`}
                    />
                    {errors.name && <p id="name-error" className="text-xs text-red-600 mt-1" role="alert">{errors.name}</p>}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Mobile Number <span className="text-[#1E3A8A]" aria-label="required">*</span>
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.mobile}
                      aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                      placeholder="e.g. 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] ${
                        errors.mobile ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                      }`}
                    />
                    {errors.mobile && <p id="mobile-error" className="text-xs text-red-600 mt-1" role="alert">{errors.mobile}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Business Name
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      name="businessName"
                      value={form.businessName}
                      onChange={handleChange}
                      placeholder="Your shop or company name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
                      City <span className="text-[#1E3A8A]" aria-label="required">*</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.city}
                      placeholder="Delhi, Mumbai, Bangalore..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] ${
                        errors.city ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 focus:bg-white'
                      }`}
                    />
                    {errors.city && <p className="text-xs text-red-600 mt-1" role="alert">{errors.city}</p>}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Required <span className="text-[#1E3A8A]" aria-label="required">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.service}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] bg-gray-50 focus:bg-white ${
                        errors.service ? 'border-red-400 bg-red-50' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-xs text-red-600 mt-1" role="alert">{errors.service}</p>}
                  </div>

                  {/* Material */}
                  <div>
                    <label htmlFor="material" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Material Type
                    </label>
                    <select
                      id="material"
                      name="material"
                      value={form.material}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
                    >
                      <option value="">Select material...</option>
                      {materialOptions.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  {/* Size */}
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Size Requirement
                    </label>
                    <input
                      id="size"
                      type="text"
                      name="size"
                      value={form.size}
                      onChange={handleChange}
                      placeholder="e.g. 4ft x 2ft"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Quantity
                    </label>
                    <input
                      id="quantity"
                      type="number"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      min="1"
                      placeholder="1"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A]"
                    >
                      <option value="">Select budget range...</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="sm:col-span-2">
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      value={form.details}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your project requirements, design preferences, installation location, etc."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] resize-none"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Reference File (Image / PDF)
                    </label>
                    <div className={`relative border-2 border-dashed rounded-xl p-4 text-center cursor-pointer hover:border-[#1E3A8A] transition-colors ${
                      form.file ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <input
                        id="file"
                        type="file"
                        name="file"
                        accept="image/*,.pdf"
                        onChange={handleChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        aria-label="Upload reference file"
                      />
                      <Upload size={20} className="mx-auto mb-1.5 text-gray-400" aria-hidden="true" />
                      <p className="text-xs text-gray-500">
                        {form.file ? form.file.name : 'Click to upload or drag & drop'}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">Image, PDF — max 10MB</p>
                    </div>
                  </div>

                  {/* Logo Upload */}
                  <div>
                    <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Logo File
                    </label>
                    <div className={`relative border-2 border-dashed rounded-xl p-4 text-center cursor-pointer hover:border-[#1E3A8A] transition-colors ${
                      form.logo ? 'border-green-400 bg-green-50' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <input
                        id="logo"
                        type="file"
                        name="logo"
                        accept="image/*"
                        onChange={handleChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        aria-label="Upload logo file"
                      />
                      <Upload size={20} className="mx-auto mb-1.5 text-gray-400" aria-hidden="true" />
                      <p className="text-xs text-gray-500">
                        {form.logo ? form.logo.name : 'Upload your logo'}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">PNG, JPG, SVG — max 5MB</p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-8 w-full bg-[#1E3A8A] hover:bg-[#1E40AF] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-base py-4 px-8 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Free Quote
                      <ChevronRight size={20} aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Why get a quote */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="font-bold text-gray-900 text-base mb-4">Why Get a Free Quote?</h2>
                <ul className="space-y-3">
                  {benefits.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <Icon size={18} className="text-green-600 mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-sm text-gray-600">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-[#111827] rounded-2xl p-6 text-white">
                <h2 className="font-bold text-base mb-4">Need Instant Help?</h2>
                <div className="space-y-4">
                  <a
                    href="tel:+919934855079"
                    className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                  >
                    <div className="w-9 h-9 bg-[#1E3A8A] rounded-lg flex items-center justify-center">
                      <Phone size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Call Us</p>
                      <p className="text-sm font-semibold">+91 99348 55079</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-green-400 transition-colors"
                  >
                    <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center">
                      <MessageCircle size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">WhatsApp</p>
                      <p className="text-sm font-semibold">Chat with us</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Clock size={16} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Working Hours</p>
                      <p className="text-sm font-semibold">Mon–Sat: 9AM – 7PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badge */}
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 italic">
                  "Excellent service and timely delivery. New Crown Art exceeded our expectations!"
                </p>
                <p className="text-xs text-gray-500 mt-2 font-medium">— Satisfied Client, Delhi</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

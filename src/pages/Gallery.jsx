import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight as ChevronRightIcon, Home, ZoomIn } from 'lucide-react'
import GalleryItem from '../components/GalleryItem'

const galleryImages = [
  'https://5.imimg.com/data5/SELLER/Default/2026/3/593347818/YE/PW/YL/45293610/acp-sign-board-500x500.jpg',
  'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
  'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
  'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2024/7/433496266/MY/ZF/KA/142456447/acp-with-acrylic-letters-1000x1000.jpg',
  'https://4.imimg.com/data4/YM/JM/MY-12149095/led-sign-board-1000x1000.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2021/10/ZY/AE/ID/30255346/vehicle-wrap-printing-service-1000x1000.jpeg',
  'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
  'https://www.e-arc.in/wp-content/uploads/2026/04/Office-Wall-Graphics.jpg',
  'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2024/7/433496266/MY/ZF/KA/142456447/acp-with-acrylic-letters-1000x1000.jpg',
  'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
  'https://4.imimg.com/data4/NG/GC/MY-1937680/sign-board-1000x1000.jpg',
  'https://5.imimg.com/data5/KV/MU/OD/SELLER-14631917/3d-golden-letter-signage-board-1000x1000.jpg',
  'https://5.imimg.com/data5/MQ/LT/MY-4476066/vinyl-wrapping-sheet-1000x1000.jpg',
  'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
  'https://5.imimg.com/data5/XE/QG/MY-11047000/cheap-flyer-printing-500x500.jpg',
  'https://5.imimg.com/data5/SELLER/Default/2024/7/433496266/MY/ZF/KA/142456447/acp-with-acrylic-letters-1000x1000.jpg',
  'https://4.imimg.com/data4/KX/AK/MY-4263331/gcom-2-1000x1000.jpg',
  'https://5.imimg.com/data5/XB/VW/QU/SELLER-1940077/one-way-vision-printing-in-delhi-1000x1000.jpg',
  'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',
  'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
  'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
]

const galleryItems = [
  { title: 'ACP Sign Board — Delhi', category: 'Sign Boards' },
  { title: 'Glow Sign — Mumbai', category: 'Sign Boards' },
  { title: 'Flex Banner — Bangalore', category: 'Banners' },
  { title: 'Shop Branding — Hyderabad', category: 'Branding' },
  { title: 'SS Letters — Chennai', category: 'Steel Letters' },
  { title: 'Acrylic Letters — Pune', category: 'Acrylic Letters' },
  { title: 'LED Sign Board — Jaipur', category: 'Sign Boards' },
  { title: 'Vehicle Wrapping — Kolkata', category: 'Branding' },
  { title: 'Flex Printing — Ahmedabad', category: 'Banners' },
  { title: 'Office Branding — Noida', category: 'Branding' },
  { title: 'Steel Letters — Surat', category: 'Steel Letters' },
  { title: 'Acrylic Signage — Coimbatore', category: 'Acrylic Letters' },
  { title: 'Hoarding — National Highway', category: 'Banners' },
  { title: 'Retail Branding — Lucknow', category: 'Branding' },
  { title: 'Channel Letters — Chandigarh', category: 'Sign Boards' },
  { title: 'Vinyl Print — Vadodara', category: 'Printing' },
  { title: 'Backlit Sign — Nagpur', category: 'Sign Boards' },
  { title: 'Offset Print — Indore', category: 'Printing' },
  { title: 'Acrylic Letters — Kochi', category: 'Acrylic Letters' },
  { title: 'Office Sign — Patna', category: 'Sign Boards' },
  { title: 'Wall Graphics — Bhopal', category: 'Printing' },
  { title: 'Steel Letters — Agra', category: 'Steel Letters' },
  { title: 'Shop Front — Rajkot', category: 'Branding' },
  { title: 'Trade Banner — Mysore', category: 'Banners' },
]

const categories = ['All', 'Sign Boards', 'Banners', 'Branding', 'Printing', 'Steel Letters', 'Acrylic Letters']


export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    document.title = 'Gallery — New Crown Art | Signage & Branding Work'
  }, [])

  const filtered = active === 'All'
    ? galleryItems.map((item, i) => ({ ...item, originalIndex: i }))
    : galleryItems
        .map((item, i) => ({ ...item, originalIndex: i }))
        .filter((item) => item.category === active)

  const openLightbox = useCallback((idx) => setLightboxIndex(idx), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === 0 ? filtered.length - 1 : i - 1))
  }, [filtered.length])

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === filtered.length - 1 ? 0 : i + 1))
  }, [filtered.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, closeLightbox, goPrev, goNext])

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null

  return (
    <>
      {/* Page header */}
      <section
        className="py-24 relative overflow-hidden"
        aria-label="Page header"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/32459951/pexels-photo-32459951/free-photo-of-vibrant-billboards-in-bustling-urban-street.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover', backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(100deg, rgba(4,4,16,0.88) 0%, rgba(4,4,16,0.80) 40%, rgba(4,4,16,0.52) 70%, rgba(4,4,16,0.28) 100%)',
        }} aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(220,38,38,0.08) 0%, transparent 60%)',
        }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <Home size={14} aria-hidden="true" />Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRightIcon size={14} /></li>
              <li className="text-white font-medium">Gallery</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest mb-5">
              <span className="w-8 h-0.5 bg-[#C9A84C]" aria-hidden="true" />
              24+ Showcased Works
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-5">
              Our <span className="gold-shimmer">Gallery</span> of Work
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Browse through our sign boards, branding, printing, and more. Click any image to view it in full detail.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-[#F9FAFB]" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto px-4">
          <h2 id="gallery-heading" className="sr-only">Gallery images</h2>

          {/* Filter */}
          <div className="mb-10 overflow-x-auto" role="tablist" aria-label="Gallery categories">
            <div className="flex gap-2 pb-2 min-w-max sm:flex-wrap sm:min-w-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active === cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    active === cat
                      ? 'bg-[#DC2626] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-red-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map((item, i) => (
              <div key={`${item.title}-${i}`} className="animate-fade-in" style={{ animationDelay: `${(i % 8) * 0.05}s` }}>
                <GalleryItem item={item} index={item.originalIndex} onClick={() => openLightbox(i)} />
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No items in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={`Gallery item: ${currentItem.title}`}
          onClick={closeLightbox}
        >
          {/* Content */}
          <div
            className="relative max-w-3xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
              aria-label="Close gallery viewer"
            >
              <X size={32} aria-hidden="true" />
            </button>

            {/* Image */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-900">
              <img
                src={galleryImages[currentItem.originalIndex % galleryImages.length]}
                alt={currentItem.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display='none'; }}
              />
            </div>

            {/* Title bar */}
            <div className="mt-4 flex items-center justify-between text-white">
              <div>
                <p className="font-semibold">{currentItem.title}</p>
                <p className="text-gray-400 text-sm">{currentItem.category}</p>
              </div>
              <p className="text-gray-400 text-sm">{lightboxIndex + 1} / {filtered.length}</p>
            </div>
          </div>

          {/* Prev button */}
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          {/* Next button */}
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Next image"
          >
            <ChevronRightIcon size={24} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  )
}

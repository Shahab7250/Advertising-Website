const stats = [
  { value: '2000+', label: 'Projects Completed' },
  { value: '10000+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
  { value: '2000+', label: 'Signage Delivered' },
]

export default function StatsBar() {
  return (
    <section
      className="py-12 relative overflow-hidden"
      aria-label="Company statistics"
      style={{
        background: 'linear-gradient(135deg, #0f0f1a 0%, #060c1a 50%, #0f0f1a 100%)',
        borderTop: '1px solid rgba(201,168,76,0.3)',
        borderBottom: '1px solid rgba(201,168,76,0.3)',
      }}
    >
      {/* Signage mosaic background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="grid grid-cols-4 h-full opacity-[0.22]">
          {[
            'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
            'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
            'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
            'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
          ].map((src, i) => (
            <div key={i} style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100%' }} />
          ))}
        </div>
        <div className="absolute inset-0" style={{ background: 'rgba(15,15,26,0.78)' }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center group">
              <dt className="text-2xl sm:text-3xl lg:text-4xl font-black gold-shimmer mb-1">{value}</dt>
              <dd className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

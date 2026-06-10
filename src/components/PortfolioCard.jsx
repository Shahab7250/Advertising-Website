import { ArrowRight } from 'lucide-react'

const categoryColors = {
  'Shop Branding': { bg: 'bg-purple-500', text: 'text-purple-700', light: 'bg-purple-50' },
  'Glow Signs': { bg: 'bg-yellow-500', text: 'text-yellow-700', light: 'bg-yellow-50' },
  'Acrylic Letters': { bg: 'bg-blue-500', text: 'text-blue-700', light: 'bg-blue-50' },
  'Hoardings': { bg: 'bg-orange-500', text: 'text-orange-700', light: 'bg-orange-50' },
  'ACP Boards': { bg: 'bg-teal-500', text: 'text-teal-700', light: 'bg-teal-50' },
  'Steel Letters': { bg: 'bg-gray-600', text: 'text-gray-700', light: 'bg-gray-50' },
  'Vehicle Branding': { bg: 'bg-green-500', text: 'text-green-700', light: 'bg-green-50' },
  'Indoor Signage': { bg: 'bg-indigo-500', text: 'text-indigo-700', light: 'bg-indigo-50' },
  'Flex Printing': { bg: 'bg-pink-500', text: 'text-pink-700', light: 'bg-pink-50' },
}

const projectImages = {
  'Metro Mall Signage':    'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
  'The Food Street Mall':  'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',
  'AutoZone Car Showroom': 'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
  'FMS Dental Hospital':   'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
  'TechHub Office':        'https://5.imimg.com/data5/SELLER/Default/2024/7/433496266/MY/ZF/KA/142456447/acp-with-acrylic-letters-1000x1000.jpg',
  'Highway Hoarding':      'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',
  'Sharma Electronics':    'https://5.imimg.com/data5/SELLER/Default/2026/3/593347818/YE/PW/YL/45293610/acp-sign-board-500x500.jpg',
  'FoodZone Restaurant':   'https://4.imimg.com/data4/NG/GC/MY-1937680/sign-board-1000x1000.jpg',
  'Royal Jewellers':       'https://5.imimg.com/data5/KV/MU/OD/SELLER-14631917/3d-golden-letter-signage-board-1000x1000.jpg',
  'Puri Emporium':         'https://5.imimg.com/data5/KV/MU/OD/SELLER-14631917/3d-golden-letter-signage-board-1000x1000.jpg',
  'Swift Courier':         'https://5.imimg.com/data5/SELLER/Default/2021/10/ZY/AE/ID/30255346/vehicle-wrap-printing-service-1000x1000.jpeg',
  'City Hospital':         'https://4.imimg.com/data4/KX/AK/MY-4263331/gcom-2-1000x1000.jpg',
  'Fashion Avenue':        'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',
  'GreenTech Solar':       'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',
  'Prime Realty':          'https://5.imimg.com/data5/KV/MU/OD/SELLER-14631917/3d-golden-letter-signage-board-1000x1000.jpg',
}

const gradients = [
  'from-purple-600 to-indigo-700',
  'from-yellow-500 to-orange-600',
  'from-blue-500 to-cyan-600',
  'from-orange-500 to-red-600',
  'from-teal-500 to-green-600',
  'from-red-500 to-pink-600',
  'from-gray-600 to-slate-700',
  'from-green-500 to-emerald-600',
  'from-indigo-500 to-purple-600',
  'from-pink-500 to-rose-600',
  'from-cyan-500 to-blue-600',
  'from-amber-500 to-yellow-600',
]

export default function PortfolioCard({ project, index = 0 }) {
  const { name, location, category, description } = project
  const cat = categoryColors[category] || { bg: 'bg-blue-600', text: 'text-blue-700', light: 'bg-blue-50' }
  const image = projectImages[name]

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 card-hover group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => { e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #1D4ED8, #111827)'; e.currentTarget.style.display='none'; }}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className={`absolute top-3 left-3 text-xs font-semibold text-white px-2.5 py-1 rounded-full ${cat.bg}`}>
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-base mb-2">{name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
        <button
          type="button"
          className="text-sm font-semibold text-[#1E3A8A] hover:text-[#1E40AF] transition-colors inline-flex items-center gap-1 group"
        >
          View Details
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}

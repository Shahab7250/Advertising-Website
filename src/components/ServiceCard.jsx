import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, name, description, color = '#DC2626', linkTo = '/services' }) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
        aria-hidden="true"
      >
        {Icon && <Icon size={24} style={{ color }} />}
      </div>
      <h3 className="font-bold text-gray-900 text-base mb-2">{name}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
      <Link
        to={linkTo}
        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
        style={{ color }}
      >
        Learn More
        <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  )
}

import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({ text, name, location, rating = 5 }) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 card-hover relative">
      {/* Quote icon */}
      <div className="absolute top-4 right-4 text-blue-100">
        <Quote size={36} aria-hidden="true" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="text-amber-400 fill-amber-400" aria-hidden="true" />
        ))}
      </div>

      <blockquote className="text-gray-600 text-sm leading-relaxed mb-5 italic">
        "{text}"
      </blockquote>

      <footer className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm"
          aria-hidden="true"
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </footer>
    </article>
  )
}

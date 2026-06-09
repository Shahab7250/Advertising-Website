import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Floating button — hidden on mobile where sticky bar shows instead */}
      <a
        href="https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20my%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl hidden sm:flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce-gentle"
      >
        <MessageCircle size={26} aria-hidden="true" />
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"
          aria-hidden="true"
        />
      </a>

      {/* Sticky bottom bar — mobile only */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-40 bg-green-500 text-white">
        <a
          href="https://wa.me/919934855079?text=Hello%20New%20Crown%20Art%2C%20I%20would%20like%20to%20get%20a%20quotation%20for%20my%20project."
          className="flex items-center justify-center gap-2 py-3.5 font-bold text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} aria-hidden="true" />
          Chat on WhatsApp
        </a>
      </div>
    </>
  )
}

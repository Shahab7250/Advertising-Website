import { ZoomIn } from 'lucide-react'

const galleryImages = [
  'https://5.imimg.com/data5/SELLER/Default/2026/3/593347818/YE/PW/YL/45293610/acp-sign-board-500x500.jpg',           // 0  ACP Sign Board
  'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',                                   // 1  Glow Sign
  'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',       // 2  Flex Banner
  'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',                                // 3  Shop Branding
  'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',                          // 4  SS Letters
  'https://5.imimg.com/data5/SELLER/Default/2024/7/433496266/MY/ZF/KA/142456447/acp-with-acrylic-letters-1000x1000.jpg', // 5  Acrylic Letters
  'https://4.imimg.com/data4/YM/JM/MY-12149095/led-sign-board-1000x1000.jpg',                                          // 6  LED Sign Board
  'https://5.imimg.com/data5/SELLER/Default/2021/10/ZY/AE/ID/30255346/vehicle-wrap-printing-service-1000x1000.jpeg',   // 7  Vehicle Wrapping
  'https://5.imimg.com/data5/SELLER/Default/2023/9/342393699/ZJ/OH/MQ/3016969/flex-banner-poster-1000x1000.jpg',       // 8  Flex Printing
  'https://www.e-arc.in/wp-content/uploads/2026/04/Office-Wall-Graphics.jpg',                                          // 9  Office Branding
  'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',                          // 10 Steel Letters
  'https://5.imimg.com/data5/SELLER/Default/2024/7/433496266/MY/ZF/KA/142456447/acp-with-acrylic-letters-1000x1000.jpg', // 11 Acrylic Signage
  'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',                   // 12 Hoarding
  'https://4.imimg.com/data4/NG/GC/MY-1937680/sign-board-1000x1000.jpg',                                               // 13 Retail Branding
  'https://5.imimg.com/data5/KV/MU/OD/SELLER-14631917/3d-golden-letter-signage-board-1000x1000.jpg',                   // 14 Channel Letters / 3D
  'https://5.imimg.com/data5/MQ/LT/MY-4476066/vinyl-wrapping-sheet-1000x1000.jpg',                                     // 15 Vinyl Print
  'https://5.imimg.com/data5/OF/FY/BU/SELLER-3380324/glow-sign-board-1000x1000.jpg',                                   // 16 Backlit Sign
  'https://5.imimg.com/data5/XE/QG/MY-11047000/cheap-flyer-printing-500x500.jpg',                                      // 17 Flyers / Print
  'https://5.imimg.com/data5/SELLER/Default/2024/7/433496266/MY/ZF/KA/142456447/acp-with-acrylic-letters-1000x1000.jpg', // 18 Acrylic Letters
  'https://4.imimg.com/data4/KX/AK/MY-4263331/gcom-2-1000x1000.jpg',                              // 19 Indoor Signage
  'https://5.imimg.com/data5/XB/VW/QU/SELLER-1940077/one-way-vision-printing-in-delhi-1000x1000.jpg',                  // 20 One Way Vision
  'https://5.imimg.com/data5/KG/FF/MY-29356796/stainless-steel-letter-signage-1000x1000.jpg',                          // 21 Steel Letters
  'https://msmarcom.com/wp-content/uploads/2022/08/Retail-Branding-Agency-Gurgaon.jpg',                                // 22 Shop Front
  'https://5.imimg.com/data5/DV/PJ/OB/SELLER-8000506/outdoor-advertisement-hoardings-1000x1000.jpg',                   // 23 Trade Banner
]

export default function GalleryItem({ item, index, onClick }) {
  const imageUrl = galleryImages[index % galleryImages.length]

  return (
    <button
      type="button"
      className="group relative w-full aspect-square overflow-hidden rounded-xl cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1E3A8A] focus-visible:ring-offset-2"
      onClick={() => onClick(index)}
      aria-label={`View ${item.title} — ${item.category}`}
    >
      <div className="relative w-full h-full overflow-hidden" aria-hidden="true">
        <img
          src={imageUrl}
          alt={item.category}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => { e.currentTarget.parentElement.style.background = '#1D4ED8'; e.currentTarget.style.display='none'; }}
        />
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
        <ZoomIn size={24} className="text-white" aria-hidden="true" />
        <p className="text-white text-sm font-semibold px-3 text-center">{item.title}</p>
      </div>

      {/* Category label */}
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-xs font-medium truncate">{item.title}</p>
      </div>
    </button>
  )
}

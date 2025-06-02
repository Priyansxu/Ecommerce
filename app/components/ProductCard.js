import Image from "next/image"
import { ShoppingCart } from "lucide-react"

export default function ProductCard({ product }) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg flex flex-col h-full transition-transform duration-200 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.category && (
          <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        )}
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-medium text-sm sm:text-base line-clamp-1 mb-1">{product.name}</h3>
        <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 mb-2">{product.description}</p>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="font-bold text-sm sm:text-base">${product.price.toFixed(2)}</span>
          <button
            className="p-1 h-8 w-8 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
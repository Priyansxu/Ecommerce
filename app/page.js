import { Star, Heart, ShoppingCart, Quote } from "lucide-react"

const inspirationalQuotes = [
  {
    id: 1,
    quote: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    id: 2,
    quote: "Everything can be taken from a man but one thing: the freedom to choose one's attitude.",
    author: "Viktor Frankl"
  },
  {
    id: 3,
    quote: "The curious paradox is that when I accept myself just as I am, then I can change.",
    author: "Carl Rogers"
  }
]

const products = [
  {
    id: 1,
    name: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "A groundbreaking exploration of the two systems that drive how we think",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 2,
    name: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description: "Revolutionary understanding of trauma and its effects on the brain",
    price: 22.50,
    rating: 4.6,
    reviews: 89,
    badge: "Popular",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 3,
    name: "Mindset: The New Psychology",
    author: "Carol S. Dweck",
    description: "How believing you can improve transforms your achievements",
    price: 18.95,
    rating: 4.9,
    reviews: 67,
    badge: "Premium",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 4,
    name: "Flow: Psychology of Happiness",
    author: "Mihaly Csikszentmihalyi",
    description: "The secret of happiness lies in optimal experience",
    price: 21.00,
    rating: 4.4,
    reviews: 156,
    badge: "New",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 5,
    name: "The Happiness Hypothesis",
    author: "Jonathan Haidt",
    description: "Ancient wisdom meets modern science in human happiness",
    price: 19.99,
    rating: 5.0,
    reviews: 23,
    badge: "Limited",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    id: 6,
    name: "Quiet: The Power of Introverts",
    author: "Susan Cain",
    description: "A passionate argument for the power of introverts",
    price: 23.50,
    rating: 4.3,
    reviews: 201,
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <div className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-light mb-4">Psychology Books</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Discover transformative psychology books that unlock the mysteries of the human mind.
          </p>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inspirationalQuotes.map((item) => (
              <div key={item.id} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                <Quote className="w-6 h-6 text-orange-500 mb-4" />
                <blockquote className="text-lg font-light leading-relaxed mb-4 text-white">
                  "{item.quote}"
                </blockquote>
                <cite className="text-gray-400 text-sm">— {item.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-zinc-800 border border-zinc-700 rounded-lg overflow-hidden group">
                <div className="relative aspect-square">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}
                  <button className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 p-2 rounded-full transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-orange-400 text-orange-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>

                  <h3 className="text-xl font-light mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">by {product.author}</p>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-light">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                      )}
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-md flex items-center text-sm transition-colors">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
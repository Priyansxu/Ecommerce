import { Star, Heart, ShoppingCart, Quote } from 'lucide-react'
import { motion } from 'framer-motion'

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
      <div className="min-h-screen bg-zinc-900 text-white">
      <motion.div 
        className="relative px-6 lg:px-12 py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            className="text-4xl lg:text-6xl font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Psychology Books
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Discover transformative psychology books that unlock the mysteries of the human mind.
          </motion.p>
        </div>

        {/* Gradient Background */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-36"
          style={{
            background: 'linear-gradient(to top, #BDA5FB 0%, #936DF8 20%, #5E2DE0 40%, #3E2291 60%, #22184D 80%, #111827 100%)',
            clipPath: "path('M 0 180 L 0 20 Q 200 80 400 20 L 400 180 Z')"
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        />

        {/* Grainy Texture */}
        <motion.div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
            filter: 'blur(0px) drop-shadow(0 0 8px rgba(0,0,0,0.3))'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8, duration: 1 }}
        />

        {/* Motion Blur Overlay */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            filter: 'blur(2px)',
            transform: 'skewY(0deg)'
          }}
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 400, opacity: 0.2 }}
          transition={{ 
            delay: 1,
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

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
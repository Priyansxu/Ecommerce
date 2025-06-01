// app/page.js
export default function HomePage() {
  const products = [
    {
      id: 1,
      name: "Dark Hoodie",
      description: "Soft & stylish everyday wear.",
      price: "$59",
      image: "https://via.placeholder.com/300x200?text=Hoodie",
    },
    {
      id: 2,
      name: "Blackout Sneakers",
      description: "Comfort in every step.",
      price: "$89",
      image: "https://via.placeholder.com/300x200?text=Sneakers",
    },
    {
      id: 3,
      name: "Midnight Watch",
      description: "Minimalist design. Maximum impact.",
      price: "$129",
      image: "https://via.placeholder.com/300x200?text=Watch",
    },
  ]

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">DarkStore</h1>
        <p className="text-zinc-400 mt-2">Style that speaks in the dark.</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-800 rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-zinc-400 text-sm mt-1">{product.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold">{product.price}</span>
                <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
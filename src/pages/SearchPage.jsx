import React from "react"
import { Search as SearchIcon, MapPin, Star } from "lucide-react"

function SearchPage() {
  const results = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `Dish ${i + 1}`,
    price: 150 + i * 10,
    category: ["Fast Food", "Indian", "Dessert"][i % 3],
    description: "A tasty option freshly made for your cravings.",
    location: ["Delhi", "Mumbai", "Bengaluru"][i % 3],
    rating: (i % 5) + 1,
  }))

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col overflow-hidden">
      {/* Header / search bar */}
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search dishes or restaurants..."
              className="flex-1 px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 transition">
              <SearchIcon size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="content-search flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="space-y-3 md:space-y-4">
            {results.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row md:items-center justify-between bg-gray-800/60 border border-gray-700 rounded-lg p-4 hover:bg-gray-800/80 transition"
              >
                {/* Left side: name, category, description */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">
                    {item.category} · {item.description}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-gray-400 text-sm">
                    <MapPin size={14} className="text-amber-500" />
                    {item.location}
                  </div>
                </div>

                {/* Right side: price + rating */}
                <div className="flex items-center justify-between md:justify-end gap-4 mt-3 md:mt-0">
                  <span className="text-amber-400 font-bold">₹{item.price}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < item.rating ? "fill-amber-400" : ""}
                      />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchPage

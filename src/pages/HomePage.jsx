import React from "react"
import "../index.css"
import { ShoppingBag, Star, MapPin } from "lucide-react"

function HomePage() {
  return (
    <div className="h-screen w-full pl-[1rem] pr-[1rem] flex flex-col overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Scrollable Content */}
      <div className="content-home flex-1 overflow-y-auto pt-3">
        
        {/* Welcome Section */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500">
            WELCOME, @MASTER
          </h1>
        </div>

        {/* Responsive Card Grid */}
        <div className="flex flex-wrap gap-4 justify-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-full sm:w-[48%] lg:w-[30%] h-[18rem] flex flex-col border border-gray-700 text-white rounded-lg overflow-hidden shadow-md shadow-black/40 bg-gradient-to-br from-gray-800 to-gray-900"
            >
              {/* Top content (split into two halves) */}
              <div className="flex flex-1">
                {/* Image */}
                <div className="w-1/2 h-full">
                  <img
                    className="object-cover h-full w-full rounded-l-lg"
                    src="https://imgs.search.brave.com/79tfMa3dt2qgTOaFdGRIdOFf-UE2ELMaFk8RxqqbCWQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/ODIzNTY3Mi9waG90/by93aG9sZS1yaXBl/LW1hbmdvLXdpdGgt/bGVhZi1vbi15ZWxs/b3ctYmFja2dyb3Vu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MmZhQWl6MkN0/WWM0UXA4cjVYc1VC/WFBzLUJic1NWclN2/S3k3bV9EODB2ND0"
                    alt="Food"
                  />
                </div>

                {/* Details */}
                <div className="w-1/2 flex flex-col justify-center p-3 text-gray-200">
                  {/* Food Name + Price */}
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="font-semibold text-lg text-white">Item {i + 1}</h2>
                    <span className="text-amber-400 font-bold">₹199</span>
                  </div>

                  {/* Category */}
                  <div className="text-sm text-gray-400 mb-1">Category: Fast Food</div>

                  {/* Short Description */}
                  <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                    A short description about this delicious food item. Tasty and quick!
                  </p>

                  {/* Location */}
                  <div className="flex items-center text-xs text-gray-400 mb-2">
                    <MapPin size={14} className="mr-1 text-amber-500" />
                    <span>Delhi, India</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className={idx < 4 ? "fill-current" : ""}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom footer bar */}
              <div className="h-[3rem] w-full bg-gradient-to-r from-amber-500 to-pink-500 flex items-center justify-around px-2">
                <button className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition">
                  <ShoppingBag size={18} />
                  <span className="text-sm font-medium">Order Food</span>
                </button>
                <button className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition">
                  <Star size={18} />
                  <span className="text-sm font-medium">Add to Fav</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage

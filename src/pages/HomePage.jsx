import React, { useEffect, useState } from "react"
import "../index.css"
import { ShoppingBag, Star, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getRecommendation } from "../store/userAction"

function HomePage() {

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const [totalItem, settotalItem] = useState(0)

  const dispatch = useDispatch()
  const { recommendations } = useSelector((state) => state.user)
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching recommendation")
      const res = await dispatch(getRecommendation(user._id, page))
      if (res?.data?.success) {
        console.log("recommendation data", res.data)
        setTotalPage(res.data.totalPages)
        settotalItem(res.data.totalItems)
      }
    }

    if (user?._id) {
      fetchData()
    }
  }, [user?._id, page, dispatch]) // dependencies so it runs only when needed

  const feedData = [
    {
      type: "food",
      name: "Paneer Tikka",
      img: "https://example.com/images/paneer.jpg",
      category: "Indian",
      description: "Spicy marinated paneer grilled to perfection.",
      location: "Delhi, India",
      price: 199,
    },
    {
      type: "food",
      name: "Cheeseburger",
      img: "https://example.com/images/burger.jpg",
      category: "Fast Food",
      description: "Juicy beef patty with cheese and lettuce.",
      location: "Mumbai, India",
      price: 149,
    },
    {
      type: "food",
      name: "Gulab Jamun",
      img: "https://example.com/images/gulabjamun.jpg",
      category: "Dessert",
      description: "Soft milk dumplings soaked in sugar syrup.",
      location: "Lucknow, India",
      price: 99,
    },
    {
      type: "food",
      name: "Sushi Roll",
      img: "https://example.com/images/sushi.jpg",
      category: "Japanese",
      description: "Fresh salmon roll wrapped in seaweed & rice.",
      location: "Bangalore, India",
      price: 299,
    },
    {
      type: "food",
      name: "Veg Pizza",
      img: "https://example.com/images/pizza.jpg",
      category: "Italian",
      description: "Loaded with fresh vegetables and mozzarella.",
      location: "Pune, India",
      price: 249,
    },

    {
      type: "hotels",
      hotels: [
        {
          name: "Taj Palace",
          img: "https://example.com/images/taj.jpg",
          location: "Delhi, India",
          rating: 4.8,
          category: "Luxury",
        },
        {
          name: "ITC Grand",
          img: "https://example.com/images/itc.jpg",
          location: "Mumbai, India",
          rating: 4.6,
          category: "Business",
        },
        {
          name: "OYO Rooms",
          img: "https://example.com/images/oyo.jpg",
          location: "Lucknow, India",
          rating: 4.0,
          category: "Budget",
        },
        {
          name: "The Leela",
          img: "https://example.com/images/leela.jpg",
          location: "Bangalore, India",
          rating: 4.7,
          category: "Luxury",
        },
      ],
    },
    {
      type: "food",
      name: "Veg Pizza",
      img: "https://example.com/images/pizza.jpg",
      category: "Italian",
      description: "Loaded with fresh vegetables and mozzarella.",
      location: "Pune, India",
      price: 249,
    },
  ]

  return (
    <div className="h-screen w-full px-4 flex flex-col overflow-hidden bg-white">
      {/* Scrollable Content */}
      <div className="content-home flex-1 overflow-y-auto pt-6">

        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
            Welcome, @Master
          </h1>
          <p className="text-gray-500 mt-1">Discover food & hotels around you</p>
        </div>

        {/* Card Grid */}
        <div className="flex flex-wrap gap-6 justify-center">
          {feedData.map((item, i) => (
            item.type === "food" ? (
              <div
                key={i}
                className="w-full sm:w-[48%] lg:w-[30%] flex flex-col rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition bg-white"
              >
                {/* Top content */}
                <div className="flex flex-1">
                  {/* Image */}
                  <div className="w-1/2 h-full">
                    <img
                      className="object-cover h-full w-full rounded-l-xl"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>

                  {/* Details */}
                  <div className="w-1/2 flex flex-col justify-center p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="font-semibold text-lg text-gray-900">{item.name}</h2>
                      <span className="text-amber-600 font-bold">₹{item.price}</span>
                    </div>

                    <div className="text-sm text-gray-500 mb-1">
                      {item.category}
                    </div>

                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <MapPin size={14} className="mr-1 text-amber-500" />
                      <span>{item.location}</span>
                    </div>

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

                {/* Bottom bar */}
                <div className="h-[3rem] w-full bg-gradient-to-r from-amber-400 to-pink-400 flex items-center justify-around px-3">
                  <Link to={`/order-food/${i}`}>
                    <button className="flex items-center gap-1 bg-white text-gray-900 px-3 py-1 rounded-md shadow hover:bg-gray-100 transition">
                      <ShoppingBag size={18} />
                      <span className="text-sm font-medium">Order</span>
                    </button>
                  </Link>

                  <button className="flex items-center gap-1 bg-white text-gray-900 px-3 py-1 rounded-md shadow hover:bg-gray-100 transition">
                    <Star size={18} />
                    <span className="text-sm font-medium">Favorite</span>
                  </button>
                </div>
              </div>
            ) : (
              // Hotels block
              <div className="w-full bg-white border border-gray-200 rounded-xl shadow-md p-4">
                <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-4 md:overflow-hidden">
                  {item.hotels.map((hotel, idx) => (
                    <Link to={`/hotel-detail/${idx}`} key={idx} className="flex-shrink-0 w-[200px] md:w-auto">
                      <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
                        <div className="h-28 w-full overflow-hidden rounded-t-lg">
                          <img
                            src={hotel.img}
                            alt={hotel.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="p-2">
                          <h3 className="text-sm font-semibold text-gray-900 truncate">{hotel.name}</h3>
                          <p className="text-xs text-gray-500 truncate">{hotel.location}</p>
                          <div className="flex items-center justify-between text-xs mt-1">
                            <span className="flex items-center gap-1 text-amber-500">
                              ⭐ <span>{hotel.rating}</span>
                            </span>
                            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-[10px]">
                              {hotel.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage

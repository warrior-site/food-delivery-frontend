import React from "react"
import "../index.css"
import { ShoppingBag, Star, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

function HomePage() {
  const feedData = [
    // Food items
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

    // Hotels block (after 5 foods)
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

    // More foods again
    {
      type: "food",
      name: "Chicken Biryani",
      img: "https://example.com/images/biryani.jpg",
      category: "Indian",
      description: "Aromatic rice cooked with chicken and spices.",
      location: "Hyderabad, India",
      price: 299,
    },
    {
      type: "food",
      name: "Ice Cream Sundae",
      img: "https://example.com/images/sundae.jpg",
      category: "Dessert",
      description: "Vanilla ice cream topped with nuts & chocolate.",
      location: "Chennai, India",
      price: 129,
    },
    // Hotels block (after 5 foods)
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
  ];


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
          {feedData.map((item, i) => (
            (item.type == "food" ? <div
              key={i}
              className="w-full sm:w-[48%] lg:w-[30%] h-[18rem] flex flex-col border border-gray-700 text-white rounded-lg overflow-hidden shadow-md shadow-black/40 bg-gradient-to-br from-gray-800 to-gray-900"
            >
              {/* Top content (split into two halves) */}
              <div className="flex flex-1">
                {/* Image */}
                <div className="w-1/2 h-full">
                  <img
                    className="object-cover h-full w-full rounded-l-lg"
                    src={item.img}
                  />
                </div>

                {/* Details */}
                <div className="w-1/2 flex flex-col justify-center p-3 text-gray-200">
                  {/* Food Name + Price */}
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="font-semibold text-lg text-white">{item.name}</h2>
                    <span className="text-amber-400 font-bold">₹{item.price}</span>
                  </div>

                  {/* Category */}
                  <div className="text-sm text-gray-400 mb-1">Category: {item.category}</div>

                  {/* Short Description */}
                  <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                    {item.description}
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
                <Link to={`/order-food/${i}`}>
                  <button className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition">
                    <ShoppingBag size={18} />
                    <span className="text-sm font-medium">Order Food</span>
                  </button>
                </Link>

                <button className="flex items-center gap-1 bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition">
                  <Star size={18} />
                  <span className="text-sm font-medium">Add to Fav</span>
                </button>
              </div>
              {/* {item.type === "hotels" && (
                <div className="absolute top-2 left-2 bg-amber-500 w-full h-[15rem] text-black px-2 py-1 text-xs font-semibold rounded">
                  {item.hotels.length} Hotels
                </div>
              )} */}
            </div>
              :
              //hotels 
              <div className="h-[15rem] bg-white border border-gray-700 text-black rounded-lg overflow-hidden shadow-md shadow-black/40 w-full">
                {/* Wrapper switches between horizontal scroll (mobile) and grid (md+) */}
                <div
                  className="
      h-full gap-4 px-4 py-2
      flex overflow-x-auto md:overflow-x-hidden
      md:grid md:grid-cols-4
    "
                >
                  {item.hotels.map((hotel, idx) => (
                    <Link to={`/hotel-detail/${idx}`} key={idx} className="w-[200px] md:w-auto flex-shrink-0">
                      <div
                        key={idx}
                        className="w-[200px] md:w-auto flex-shrink-0 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {/* Hotel Image */}
                        <div className="h-28 w-full overflow-hidden rounded-t-lg">
                          <img
                            src={hotel.img}
                            alt={hotel.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-2 flex flex-col gap-1">
                          <h3 className="text-sm font-semibold truncate">{hotel.name}</h3>
                          <p className="text-xs text-gray-600 truncate">{hotel.location}</p>

                          {/* Rating + Category */}
                          <div className="flex items-center justify-between text-xs mt-1">
                            <span className="flex items-center gap-1">
                              ⭐ <span>{hotel.rating}</span>
                            </span>
                            <span className="px-2 py-0.5 bg-gray-200 rounded-full text-[10px]">
                              {hotel.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>

                  ))}
                </div>
              </div>


              //ends hotel
            )


          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage

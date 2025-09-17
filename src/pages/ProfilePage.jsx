import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavHotels, logoutUser } from "../store/userAction";
import "./pages.css"

function ProfilePage() {

  const user1 = useSelector((state) => state.user.user)
  console.log("user data in profile page", user1)
  const favorites1 = useSelector((state) => state.user.fav)
  const dispatch = useDispatch()
  // Mock User
  const user = {
    name: "Hritvik Sharma",
    email: "hritvik@example.com",
    location: "Delhi, India",
    image: "https://via.placeholder.com/150",
    totalOrders: 12,
    totalSpent: 5400,
    totalRefunds: 600,
  };

  // Mock Favorite Hotels
  const favorites = [
    {
      name: "Spice Garden",
      img: "https://via.placeholder.com/200x120",
    },
    {
      name: "Royal Biryani",
      img: "https://via.placeholder.com/200x120",
    },
    {
      name: "Sweet Tooth",
      img: "https://via.placeholder.com/200x120",
    },
    {
      name: "Cafe Delight",
      img: "https://via.placeholder.com/200x120",
    },
  ];

  // Mock Purchases
  // const purchases = [
  //   {
  //     hotelName: "Spice Garden",
  //     month: "August",
  //     time: "12 Aug, 7:45 PM",
  //     price: 450,
  //     refunded: { status: false },
  //   },
  //   {
  //     hotelName: "Royal Biryani",
  //     month: "August",
  //     time: "5 Aug, 1:20 PM",
  //     price: 600,
  //     refunded: { status: true },
  //   },
  //   {
  //     hotelName: "Sweet Tooth",
  //     month: "July",
  //     time: "28 Jul, 9:15 PM",
  //     price: 300,
  //     refunded: { status: false },
  //   },
  //   {
  //     hotelName: "Cafe Delight",
  //     month: "July",
  //     time: "12 Jul, 11:30 AM",
  //     price: 700,
  //     refunded: { status: false },
  //   },
  // ];
  const handleLogout = async () => {
    const response = await dispatch(logoutUser())
    if (response.success) {
      alert("Logged out successfully")
    }
  }


  useEffect(() => {
    const fetch = async () => {
      console.log("fetching fav hotels")
      if (user1) {
        const response = await dispatch(getFavHotels(user1._id))
        console.log(response)
        console.log(favorites1)
      }
    }
    if(favorites1.length===0){
      fetch()
    }
    


  }, [user1, dispatch])


  return (
    <div className="h-screen bg-gray-100 p-4 overflow-hidden">
      <div className="profile-main h-full overflow-y-auto pr-2">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 bg-white p-4 rounded-xl shadow-md">
          <img
            src={user1.profilePhoto || user.image}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold">{user1.username || user.name}</h2>
            <p className="text-gray-600">{user1.email || user.email}</p>
            <p className="text-gray-500 text-sm">{user.location}</p>
            <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 my-4">
          <div className="bg-white p-3 rounded-lg text-center shadow">
            <h3 className="text-lg font-bold">{user.totalOrders}</h3>
            <p className="text-sm text-gray-500">Orders</p>
          </div>
          <div className="bg-white p-3 rounded-lg text-center shadow">
            <h3 className="text-lg font-bold">₹{user.totalSpent}</h3>
            <p className="text-sm text-gray-500">Spent</p>
          </div>
          <div className="bg-white p-3 rounded-lg text-center shadow">
            <h3 className="text-lg font-bold">₹{user.totalRefunds}</h3>
            <p className="text-sm text-gray-500">Refunded</p>
          </div>
        </div>

        {/* Favorites */}
        {/* ✅ Conditional rendering */}
        {favorites && favorites.length > 0 && (
          <div className="favorites-wrapper">
            <h2 className="font-semibold text-lg mt-4 mb-2">Favorite Hotels</h2>

            {favorites1.map((favDoc, docIdx) => (
              <div key={docIdx} className="mb-4">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {favDoc.foods.map((hotel, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-40 bg-white rounded-lg p-2 shadow"
                    >
                      <img
                        src={hotel.img}
                        alt={hotel.name}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <p className="mt-1 text-sm font-medium">{hotel.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}


        {/* Settings */}
        <h2 className="font-semibold text-lg mt-6 mb-2">Settings</h2>
        <div className="bg-white p-3 rounded-lg shadow">
          <button className="w-full text-left py-2 border-b">Notifications</button>
          <button className="w-full text-left py-2 border-b">Dark Mode</button>
          <button
            onClick={handleLogout}
            className="w-full text-left py-2 text-red-600">Logout</button>
        </div>
      </div>

    </div>
  );
}

export default ProfilePage;

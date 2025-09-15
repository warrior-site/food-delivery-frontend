import React, { useState, useEffect } from 'react'

function HistoryPage() {
  const [totalSpent, setTotalSpent] = useState(0)
  const [totalReturned, setTotalReturned] = useState(0)

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const purchases = [
    {
      month: "January",
      time: "2025-01-12T14:30:00",
      hotelName: "Taj Palace",
      price: 12000,
      refunded: { status: true, amount: 2000, reason: "Room service issue" },
    },
    {
      month: "February",
      time: "2025-02-05T19:45:00",
      hotelName: "ITC Grand",
      price: 8500,
      refunded: { status: false, amount: 0, reason: null },
    },
    {
      month: "March",
      time: "2025-03-18T09:15:00",
      hotelName: "The Leela",
      price: 15000,
      refunded: { status: true, amount: 5000, reason: "Booking cancellation" },
    },
    {
      month: "April",
      time: "2025-04-02T22:10:00",
      hotelName: "OYO Premium",
      price: 3000,
      refunded: { status: false, amount: 0, reason: null },
    },
    {
      month: "May",
      time: "2025-05-27T11:05:00",
      hotelName: "Radisson Blu",
      price: 9500,
      refunded: { status: true, amount: 1500, reason: "Early checkout" },
    },
  ];

  useEffect(() => {
    const spent = purchases
      .filter(item => !item.refunded.status)
      .reduce((sum, item) => sum + Number(item.price), 0);

    const returned = purchases
      .filter(item => item.refunded.status)
      .reduce((sum, item) => sum + Number(item.refunded.amount), 0);

    setTotalSpent(spent);
    setTotalReturned(returned);
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100 text-gray-900 p-5 font-bold overflow-hidden">
      <div className="w-full h-full overflow-y-auto scrollbar-hide space-y-6">

        {/* Page Title */}
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800">History</h1>
        </div>

        {/* Totals */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col justify-center items-center text-xl w-1/2 h-28 border rounded-lg bg-white text-red-600 shadow-md">
            <p>Spent</p>
            <p>-₹{totalSpent}</p>
          </div>
          <div className="flex flex-col justify-center items-center text-xl w-1/2 h-28 border rounded-lg bg-white text-green-600 shadow-md">
            <p>Refunded</p>
            <p>₹{totalReturned}</p>
          </div>
        </div>

        {/* Live Orders */}
        <div className="w-full bg-white text-center py-3 rounded-md shadow border text-gray-600">
          No Live Order
        </div>

        {/* Purchase History */}
        {months.slice().reverse().map((month) => {
          const monthPurchases = purchases.filter(item => item.month === month);
          if (monthPurchases.length === 0) return null;

          return (
            <div key={month} className="space-y-3">
              <h2 className="text-lg font-semibold text-gray-700">{month}</h2>
              {monthPurchases.map((item, idx) => (
                <div
                  key={month + '-' + idx}
                  className="border rounded-lg bg-white shadow-sm p-4"
                >
                  <h3 className="font-semibold text-gray-800">{item.hotelName}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(item.time).toLocaleString()}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-gray-800">₹{item.price}</span>
                    {item.refunded.status ? (
                      <span className="text-red-600 text-sm">Refunded ₹{item.refunded.amount}</span>
                    ) : (
                      <span className="text-green-600 text-sm">Completed</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default HistoryPage

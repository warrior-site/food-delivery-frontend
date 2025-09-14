import React, { useState, useEffect } from 'react'

function HistoryPage() {
  const [totalSpent, settotalSpent] = useState(0)

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const purchases = [
    {
      month: "January",
      time: "2025-01-12T14:30:00", // ISO format (easy for sorting & parsing)
      hotelName: "Taj Palace",
      price: 12000,
      refunded: {
        status: true,
        amount: 2000,
        reason: "Room service issue",
      },
    },
    {
      month: "January",
      time: "2025-01-12T14:30:00", // ISO format (easy for sorting & parsing)
      hotelName: "Taj Palace",
      price: 12000,
      refunded: {
        status: true,
        amount: 2000,
        reason: "Room service issue",
      },
    },
    {
      month: "January",
      time: "2025-01-12T14:30:00", // ISO format (easy for sorting & parsing)
      hotelName: "Taj Palace",
      price: 12000,
      refunded: {
        status: true,
        amount: 2000,
        reason: "Room service issue",
      },
    },
    {
      month: "February",
      time: "2025-02-05T19:45:00",
      hotelName: "ITC Grand",
      price: 8500,
      refunded: {
        status: false,
        amount: 0,
        reason: null,
      },
    },
    {
      month: "March",
      time: "2025-03-18T09:15:00",
      hotelName: "The Leela",
      price: 15000,
      refunded: {
        status: true,
        amount: 5000,
        reason: "Booking cancellation",
      },
    },
    {
      month: "April",
      time: "2025-04-02T22:10:00",
      hotelName: "OYO Premium",
      price: 3000,
      refunded: {
        status: false,
        amount: 0,
        reason: null,
      },
    },
    {
      month: "May",
      time: "2025-05-27T11:05:00",
      hotelName: "Radisson Blu",
      price: 9500,
      refunded: {
        status: true,
        amount: 1500,
        reason: "Early checkout",
      },
    },
  ];

  useEffect(() => {
    let total = 0;
    total = purchases.filter((item) => item.refunded.status === false)
      .reduce((sum, item) => sum + Number(item.price), 0);
    settotalSpent(total)
    console.log(total)
  }, [])



  return (

    <div className='w-full h-screen  bg-gray-600 text-black p-5 text-shadow-blue-50 font-bold overflow-hidden'>
      <div className='w-full h-full overflow-y-auto scrollbar-hide'>
        <div className='flex justify-center items-center mb-4'>
          <h1>
            History
          </h1>
        </div>
        <div className='flex justify-between items-center mb-4 w-full h-[8rem]'>
          <div className='text-3xl w-1/2 h-full border-2 border-gray-700 p-2 rounded-lg bg-white text-red-700 shadow-md shadow-black/40'>
            {totalSpent}
          </div>
          <div className='text-2xl w-1/2 h-full border-2 border-gray-700 p-2 rounded-lg bg-white shadow-md shadow-black/40'>

          </div>
        </div>
        {months.reverse().map((month, index) => (
          purchases
            .filter(item => item.month === month)
            .map((item, idx) => (
              <div key={month + '-' + idx} className='border border-gray-700 m-2 p-2 rounded-lg bg-white'>
                <h2>{item.hotelName}</h2>
                <h2>{item.month}</h2>
              </div>
            ))
        ))}
      </div>

    </div>
  )
}

export default HistoryPage
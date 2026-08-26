import { useState } from "react";

function FeesAndPayment() {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const payments = [
    {
      id: 1,
      date: "Aug 15, 2026",
      description: "Fall Tuition Installment 1",
      amount: 250000,
      status: "Paid",
    },
    {
      id: 2,
      date: "Sep 15, 2026",
      description: "Housing Fee Q1",
      amount: 150000,
      status: "Paid",
    },
    {
      id: 3,
      date: "Oct 01, 2026",
      description: "Library Late Fee",
      amount: 50000,
      status: "Paid",
    },
    {
      id: 4,
      date: "Oct 05, 2026",
      description: "Medical Fee",
      amount: 75000,
      status: "Paid",
    },
    {
      id: 5,
      date: "Oct 10, 2026",
      description: "Student Registration Fee",
      amount: 35000,
      status: "Paid",
    },
    {
      id: 6,
      date: "Oct 15, 2026",
      description: "Sports and Recreation Fee",
      amount: 25000,
      status: "Paid",
    },
    {
      id: 7,
      date: "Oct 20, 2026",
      description: "Student ID Card Fee",
      amount: 15000,
      status: "Paid",
    },
    {
      id: 8,
      date: "Nov 01, 2026",
      description: "Examination Fee",
      amount: 50000,
      status: "Paid",
    },
    {
      id: 9,
      date: "Nov 10, 2026",
      description: "Library and Technology Fee",
      amount: 100000,
      status: "Paid",
    },
    {
      id: 10,
      date: "Nov 15, 2026",
      description: "Fall Tuition Installment 2",
      amount: 300000,
      status: "Paid",
    },
    {
      id: 11,
      date: "Nov 25, 2026",
      description: "Housing Fee Q2",
      amount: 150000,
      status: "Paid",
    },
    {
      id: 12,
      date: "Dec 01, 2026",
      description: "Medical Services Fee",
      amount: 40000,
      status: "Paid",
    },
  ];

  // Search payment history
  const filteredPayments = payments.filter((payment) => {
    const searchText = search.toLowerCase();

    return (
      payment.description.toLowerCase().includes(searchText) ||
      payment.date.toLowerCase().includes(searchText) ||
      payment.status.toLowerCase().includes(searchText) ||
      payment.amount.toString().includes(searchText)
    );
  });

  // Show only first 3 unless View All is clicked
  const displayedPayments = showAll
    ? filteredPayments
    : filteredPayments.slice(0, 3);

  return (
    <div className="bg-gray-100 min-h-screen p-5">

      {/* Search Bar */}
      <div className="bg-white rounded-lg p-4 mb-5 shadow-sm">

        <div className="relative">

          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search payment history..."
            className="w-full border border-gray-200 rounded-lg py-3 pl-11 pr-10 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          {/* Clear Search */}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}

        </div>

        {/* Search result text */}
        {search && (
          <p className="text-xs text-gray-500 mt-2">
            {filteredPayments.length} payment
            {filteredPayments.length !== 1 ? "s" : ""} found
          </p>
        )}

      </div>


      {/* Top Section */}
      <div className="flex gap-4">

        {/* Outstanding Balance */}
        <div className="bg-white p-5 rounded-lg w-[600px]">

          <div className="flex justify-between items-center">

            <div>

              <p className="text-xs text-gray-500 uppercase">
                Outstanding Balance
              </p>

              <h1 className="text-3xl font-bold">
                ₦450,000.00
              </h1>

              <p className="text-xs text-red-500 mt-1">
                Due October 30, 2026
              </p>

            </div>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-xs hover:bg-blue-700 transition">
              <i className="fa-regular fa-credit-card mr-2"></i>
              Pay Now
            </button>

          </div>


          <hr className="my-5" />


          <div className="flex justify-between text-xs mb-2">

            <p className="font-semibold">
              Fall Semester 2026
            </p>

            <p className="text-gray-500">
              Paid ₦4,550,000 of ₦5,000,000
            </p>

          </div>


          <div className="bg-gray-200 h-1 rounded">

            <div className="bg-blue-500 h-1 rounded w-[91%]"></div>

          </div>

        </div>


        {/* Fee Breakdown */}
        <div className="bg-white p-4 rounded-lg w-1/3">

          <h2 className="font-bold mb-4">
            Fee Breakdown
          </h2>


          {/* Tuition */}
          <div className="mb-3">

            <div className="flex justify-between text-xs">

              <p>
                <i className="fa-solid fa-circle text-[6px] mr-2"></i>
                Tuition
              </p>

              <p>
                ₦300,800.00
              </p>

            </div>

            <div className="bg-gray-200 h-1 mt-2 rounded">

              <div className="bg-gray-800 h-1 rounded w-64"></div>

            </div>

          </div>


          {/* Housing */}
          <div className="mb-3">

            <div className="flex justify-between text-xs">

              <p>
                <i className="fa-solid fa-circle text-[6px] mr-2"></i>
                Housing
              </p>

              <p>
                ₦150,000.00
              </p>

            </div>

            <div className="bg-gray-200 h-1 mt-2 rounded">

              <div className="bg-blue-500 h-1 rounded w-36"></div>

            </div>

          </div>


          {/* Library */}
          <div>

            <div className="flex justify-between text-xs">

              <p>
                <i className="fa-solid fa-circle text-[6px] mr-2"></i>
                Library & Tech
              </p>

              <p>
                ₦200,000.00
              </p>

            </div>

            <div className="bg-gray-200 h-1 mt-2 rounded">

              <div className="bg-pink-600 h-1 rounded w-24"></div>

            </div>

          </div>

        </div>

      </div>


      {/* Payment History */}
      <div className="bg-white rounded-xl shadow-sm w-full overflow-hidden mt-10">

        <div className="flex justify-between items-center px-5 py-4">

          <h2 className="text-gray-900 text-lg font-bold">
            Payment History
          </h2>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 text-xs hover:text-blue-800 transition"
          >
            {showAll ? "Show Less" : "View All"}
          </button>

        </div>


        {/* Table Header */}
        <div className="bg-gray-50 px-4 py-3">

          <div className="grid grid-cols-5 text-gray-600 text-xs font-bold">

            <p>DATE</p>

            <p>DESCRIPTION</p>

            <p>AMOUNT</p>

            <p>STATUS</p>

            <p className="text-center">
              RECEIPT
            </p>

          </div>

        </div>


        {/* Payment Records */}
        {displayedPayments.map((payment) => (

          <div
            key={payment.id}
            className="grid grid-cols-5 items-center px-4 py-4 border-b border-gray-100 text-sm hover:bg-gray-50 transition"
          >

            <p className="text-gray-700">
              {payment.date}
            </p>


            <p className="text-gray-800">
              {payment.description}
            </p>


            <p className="text-gray-800">
              ₦{payment.amount.toLocaleString("en-NG", {
                minimumFractionDigits: 2,
              })}
            </p>


            <div>

              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                {payment.status}
              </span>

            </div>


            <div className="text-center">

              <button
                onClick={() =>
                  alert(
                    `Receipt\n\nDescription: ${payment.description}\nAmount: ₦${payment.amount.toLocaleString()}\nDate: ${payment.date}\nStatus: ${payment.status}`
                  )
                }
                className="text-blue-600 hover:text-blue-800 hover:scale-110 transition"
                title="View receipt"
              >
                <i className="fa-solid fa-download text-sm"></i>
              </button>

            </div>

          </div>

        ))}


        {/* No Search Results */}
        {filteredPayments.length === 0 && (

          <div className="text-center py-10">

            <i className="fa-solid fa-magnifying-glass text-3xl text-gray-300"></i>

            <p className="text-gray-500 text-sm mt-3">
              No payment found
            </p>

            <button
              onClick={() => setSearch("")}
              className="text-blue-600 text-xs mt-2 hover:underline"
            >
              Clear search
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default FeesAndPayment;
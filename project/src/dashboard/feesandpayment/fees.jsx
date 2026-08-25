function FeesAndPayment() {
  return (
    <div className="bg-gray-100 min-h-screen p-5">

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

            <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-xs">
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

          <a href="#" className="text-blue-600 text-xs">
            View All
          </a>

        </div>


        {/* Table Header */}
        <div className="bg-gray-50 px-4 py-3">

          <div className="grid grid-cols-5 text-gray-600 text-xs font-bold">

            <p>DATE</p>
            <p>DESCRIPTION</p>
            <p>AMOUNT</p>
            <p>STATUS</p>
            <p className="text-center">RECEIPT</p>

          </div>

        </div>


        {/* Payment 1 */}
        <div className="grid grid-cols-5 items-center px-4 py-4 border-b border-gray-100 text-sm">

          <p className="text-gray-700">
            Aug 15, 2026
          </p>

          <p className="text-gray-800">
            Fall Tuition Installment 1
          </p>

          <p className="text-gray-800">
            ₦250,000.00
          </p>

          <div>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
              Paid
            </span>
          </div>

          <div className="text-center">
            <i className="fa-solid fa-download text-blue-600 text-sm"></i>
          </div>

        </div>


        {/* Payment 2 */}
        <div className="grid grid-cols-5 items-center px-4 py-4 border-b border-gray-100 text-sm">

          <p className="text-gray-700">
            Sep 15, 2026
          </p>

          <p className="text-gray-800">
            Housing Fee Q1
          </p>

          <p className="text-gray-800">
            ₦150,000.00
          </p>

          <div>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
              Paid
            </span>
          </div>

          <div className="text-center">
            <i className="fa-solid fa-download text-blue-600 text-sm"></i>
          </div>

        </div>


        {/* Payment 3 */}
        <div className="grid grid-cols-5 items-center px-4 py-4 text-sm">

          <p className="text-gray-700">
            Oct 01, 2026
          </p>

          <p className="text-gray-800">
            Library Late Fee
          </p>

          <p className="text-gray-800">
            ₦50,000.00
          </p>

          <div>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
              Paid
            </span>
          </div>

          <div className="text-center">
            <i className="fa-solid fa-download text-blue-600 text-sm"></i>
          </div>

        </div>

      </div>

    </div>
  );
}

export default FeesAndPayment;
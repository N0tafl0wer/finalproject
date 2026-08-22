import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-col w-70 h-screen bg-[#F0F4FF] p-10">

      <div className="flex items-center">
        <div className="flex justify-center items-center bg-[#021330] w-13 h-13 aspect-square shrink-0 p-2.5 rounded-xl">
          <i className="fa-solid fa-graduation-cap text-2xl text-white"></i>
        </div>

        <div className="flex flex-col ml-5 leading-[27px]">
          <div className="text-[30px] font-[700]">BrainBench</div>
          <div className="text-[20px] font-[400] text-[#53575E]">
            Student Access
          </div>
        </div>
      </div>

      <div className="mt-25 text-[#53575E]">

        <Link to="/dashboard" className="flex items-center mb-12">
          <i className="fa-solid fa-border-all text-[35px]"></i>
          <div className="ml-3 text-[20px] font-[700]">
            Dashboard
          </div>
        </Link>

        <Link to="/dashboard/courses" className="flex items-center mb-12">
          <i className="fa-solid fa-graduation-cap text-[35px]"></i>
          <div className="ml-3 text-[20px] font-[700]">
            Courses
          </div>
        </Link>

        <Link to="/dashboard/timetable" className="flex items-center mb-12">
          <i className="fa-solid fa-calendar-days text-[35px]"></i>
          <div className="ml-3 text-[20px] font-[700]">
            Timetable
          </div>
        </Link>

        <Link to="/dashboard/grades" className="flex items-center mb-12">
          <i className="fa-solid fa-star text-[35px]"></i>
          <div className="ml-3 text-[20px] font-[700]">
            Grades
          </div>
        </Link>

        <Link to="/dashboard/feesandpayments" className="flex items-center mb-12">
          <i className="fa-solid fa-wallet text-[35px]"></i>
          <div className="ml-3 text-[20px] font-[700]">
            Fees and Payments
          </div>
        </Link>

        <Link to="/dashboard/announcement" className="flex items-center mb-12">
          <i className="fa-solid fa-bullhorn text-[35px]"></i>
          <div className="ml-3 text-[20px] font-[700]">
            Announcements
          </div>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
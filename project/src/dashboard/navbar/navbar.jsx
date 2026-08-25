import { NavLink } from "react-router-dom";

function Navbar() {
    
    return(
        <>
          <nav className="flex flex-col w-72 h-screen justify-between bg-[#F0F4FF] p-6 ">
                <div>
                    <div className="flex items-center">
                        <div className="flex justify-center items-center bg-[#021330] w-11 h-full aspect-square shrink-0 p-2.5 rounded-xl">
                            <i className="fa-solid fa-graduation-cap text-[20px] text-white"></i>
                        </div>
                        <div className="flex flex-col ml-5 leading-[27px]">
                            <div className="text-[23px] font-[700]">BrainBench</div>
                            <div className="text-[15px] font-[400] text-[#53575E]">Student Access</div>
                        </div>
                    </div>
                    <div className="mt-25 text-[#53575E]">
                        <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-[10px] text-[15px] font-[700] bg-blue-100 text-blue-600 mb-5 h-14 p-3" : "flex items-center gap-3 text-[15px]  mb-5 font-[700] rounded-[10px] text-slate-600 hover:bg-[#DCE6FF] h-14 p-3"}>
                            <i className="fa-solid fa-border-all text-[25px]"></i>
                            <span>Dashboard</span>
                        </NavLink>
                        <NavLink to="/dashboard/courses" className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-[10px] text-[15px] font-[700] bg-blue-100 text-blue-600 mb-5 h-14 p-3" : "flex items-center gap-3 text-[15px] font-[700] rounded-[10px] text-slate-600 hover:bg-[#DCE6FF] mb-5 h-14 p-3"}>
                            <i className="fa-solid fa-graduation-cap text-[25px]"></i>
                            <span>Courses</span>
                        </NavLink>
                        <NavLink to="/dashboard/timetable" className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-[10px] text-[15px] font-[700] bg-blue-100 text-blue-600 mb-5 h-14 p-3" : "flex items-center gap-3 text-[15px] font-[700] rounded-[10px] text-slate-600 hover:bg-slate-100 mb-5 h-14 p-3"}>
                            <i className="fa-solid fa-calendar-days text-[25px]"></i>
                            <span>Timetable</span>
                        </NavLink>
                        <NavLink to="/dashboard/grades" className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-[10px] text-[15px] font-[700] bg-blue-100 text-blue-600 mb-5 h-14 p-3" : "flex items-center gap-3 text-[15px] font-[700] rounded-[10px] text-slate-600 hover:bg-[#DCE6FF] mb-5 h-14 p-3"}>
                            <i className="fa-solid fa-star text-[25px]"></i>
                            <span>Grades</span>
                        </NavLink>
                        <NavLink to="/dashboard/feesandpayment" className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-[10px] text-[15px] font-[700] bg-blue-100 text-blue-600 mb-5 h-14 p-3" : "flex items-center gap-3 text-[15px] font-[700] rounded-[10px] text-slate-600 hover:bg-[#DCE6FF] mb-5 h-14 p-3"}>
                            <i className="fa-solid fa-wallet text-[25px]"></i>
                            <span>Fees and Payment</span>
                        </NavLink>
                        <NavLink to="/dashboard/announcement" className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-[10px] text-[15px] font-[700] bg-blue-100 text-blue-600 mb-5 h-14 p-3" : "flex items-center gap-3 text-[15px] font-[700] rounded-[10px] text-slate-600 hover:bg-[#DCE6FF] mb-5 h-14 p-3"}>
                            <i className="fa-solid fa-bullhorn text-[25px]"></i>
                            <span>Announcements</span>
                        </NavLink>
                    </div>
                </div>
                 <div className="mt-100  text-[#53575E] justify-between">
                    <NavLink to="/dashboard/support" className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-[10px] text-[15px] font-[700] bg-blue-100 text-blue-600 mb-5 h-14 p-3" : "flex items-center gap-3 text-[15px] font-[700] rounded-[10px] text-slate-600 hover:bg-[#DCE6FF] mb-5 h-14 p-3"}>
                        <i className="fa-solid fa-circle-question text-[25px]"></i>
                        <span>Support</span>
                    </NavLink>
                    <NavLink to="/dashboard/profile" className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-[10px] text-[15px] font-[700] bg-blue-100 text-blue-600 mb-5 h-14 p-3" : "flex items-center gap-3 text-[15px] font-[700] rounded-[10px] text-slate-600 hover:bg-[#DCE6FF] mb-5 h-14 p-3"}>
                        <i className="fa-solid fa-user text-[25px]"></i>
                        <span>Profile</span>
                    </NavLink>
                    <NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? "flex items-center gap-3 rounded-[10px] text-[15px] font-[700] bg-blue-100 text-blue-600 mb-5 h-14 p-3" : "flex items-center gap-3 text-[15px] font-[700] rounded-[10px] text-slate-600 hover:bg-[#DCE6FF] mb-5 h-14 p-3"}>
                        <i className="fa-solid fa-gear text-[25px]"></i>
                        <span>Settings</span>
                    </NavLink>
                </div>
            </nav> 
        </>
    );
   
};

export default Navbar;
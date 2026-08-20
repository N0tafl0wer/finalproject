import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Announcement from "./pages/announcement/announcement";
import Courses from "./pages/courses/courses";
import Dashboard from "./pages/dashboard/dashboard";
import FeesAndPayment from "./pages/feesandpayment/fees";
import Grades from "./pages/grades/grades";
import Profile from "./pages/profile/profile";
import Settings from "./pages/settings/settings";
import Support from "./pages/support/support";
import TimeTable from "./pages/timetable/timetable";


function App() {
  return (
        <BrowserRouter>
          <Navbar />
            <Routes>
            <Route 
              path="/"
              element = {<Dashboard />}
            />
            <Route 
              path="/courses"
              element = {<Courses />}
            />
            <Route 
              path="/timetable"
              element = {<Timetable />}
            />
            <Route 
              path="/grades"
              element = {<Grades />}
            />
            <Route 
              path="/feesandpayments"
              element = {<FeesAndPayment />}
            />
            <Route 
              path="/announcement"
              element = {<Announcement />}
            />
            <Route 
              path="/support"
              element = {<Support />}
            />
            <Route 
              path="/profile"
              element = {<Profile />}
            />
            <Route 
              path="/settings"
              element = {<Settings />}
            />
          </Routes>
        </BrowserRouter>
  )
}

export default App;


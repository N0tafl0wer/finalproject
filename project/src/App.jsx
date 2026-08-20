import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./pages/navbar/navbar";
import Announcement from "./pages/announcement/announcement";
import Courses from "./pages/courses/courses";
import Dashboard from "./pages/dashboard/dashboard";
import FeesAndPayment from "./pages/feesandpayment/fees";
import Grades from "./pages/grades/grades";
import Profile from "./pages/profile/profile";
import Settings from "./pages/settings/settings";
import Support from "./pages/support/support";
import TimeTable from "./pages/timetable/timetable";
import SignInPage from "./pages/signinpage/signinpage";


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
              element = {<TimeTable />}
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
  );
};

export default App;


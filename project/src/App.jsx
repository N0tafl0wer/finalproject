import { BrowserRouter, Routes, Route } from "react-router-dom";

import Announcement from "./dashboard/announcement/announcement";
import Courses from "./dashboard/courses/courses";
import FeesAndPayment from "./dashboard/feesandpayment/fees";
import Grades from "./dashboard/grades/grades";
import Profile from "./dashboard/profile/profile";
import Settings from "./dashboard/settings/settings";
import Support from "./dashboard/support/support";
import TimeTable from "./dashboard/timetable/timetable";

import SignInPage from "./signinpage/signinpage";
import DashboardLayout from "./dashboard/Dashboardlayout";
import Dashboard from "./dashboard/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

      
        <Route path="/" element={<SignInPage />} />

      
        <Route path="/dashboard" element={<DashboardLayout />}>

          <Route index element={<Dashboard />} />

          <Route path="courses" element={<Courses />} />

          <Route path="timetable" element={<TimeTable />} />

          <Route path="grades" element={<Grades />} />

          <Route path="feesandpayments" element={<FeesAndPayment />} />

          <Route path="announcement" element={<Announcement />} />

          <Route path="support" element={<Support />} />

          <Route path="profile" element={<Profile />} />

          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
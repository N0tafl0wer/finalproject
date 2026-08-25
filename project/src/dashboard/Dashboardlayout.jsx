import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
};

export default DashboardLayout;
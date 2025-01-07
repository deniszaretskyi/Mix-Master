import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;

import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Navbar />
      <div className="page">{isLoading ? <h3>Loading...</h3> : <Outlet />}</div>
    </div>
  );
};

export default HomeLayout;

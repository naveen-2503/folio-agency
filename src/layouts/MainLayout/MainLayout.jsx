import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '96px' }}></div>
      <Outlet />
    </>
  );
};

export default MainLayout;
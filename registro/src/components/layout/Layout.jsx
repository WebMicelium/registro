import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar.jsx";
import Footer from "./footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

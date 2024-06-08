import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  let navbarBg;
  let footerBg;

  switch (window.location.pathname) {
    case "/":
      navbarBg = "bg-dark-blue";
      footerBg = "bg-gradient-to-br from-violet-500 to-blue-900";
      break;
    case "/download" || "/nitro":
      navbarBg = "bg-light-blue";
      footerBg = "bg-light-black";
  }
  return (
    <div className="overflow-x-hidden">
      <Navbar navbarBg={navbarBg} />
      <Outlet />
      <Footer footerBg={footerBg} />
    </div>
  );
};

export default Layout;

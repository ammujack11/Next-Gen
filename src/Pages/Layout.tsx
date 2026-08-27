import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Layout(){
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-1 pt-16">
            <Outlet />
        </div>
        <Footer />
        </div>
    );
}

export default Layout;
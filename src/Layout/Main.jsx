import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";



const Main = () => {
    const location = useLocation();
    const noFooter = location.pathname.includes('login') || location.pathname.includes('signup') 
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;
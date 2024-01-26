import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const MainLayout = () => {
   const location = useLocation()
   console.log(location)
   const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
          {
            noHeaderFooter || <Navbar></Navbar>
          }
           <Outlet></Outlet>  
           {
            noHeaderFooter || <Footer></Footer>
           }
         

        </div>
    );
};

export default MainLayout;
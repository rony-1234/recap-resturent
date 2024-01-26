import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Contact from "../Pages/Contact/Contact";
import Order from "../components/Order/Order";
import Login from "../components/Login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;
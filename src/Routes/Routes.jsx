import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Secret/Secret";
import Private from "./Private";
import DashBoard from "../Layout/DashBoard/DashBoard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <OurMenu></OurMenu>
      },
      {
        path: 'shop/:category',
        element: <OurShop></OurShop>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <Private><Secret></Secret></Private>
      },
    ]
  },
  {
    path: 'dashboard',
    element: <Private><DashBoard></DashBoard></Private>,
    children: [
      {
        path:'userhome',
        element:<UserHome></UserHome>
      },
      {
        path: 'mycart',
        element:<MyCart></MyCart>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      },
      {
        path:'paymenthistory',
        element:<PaymentHistory></PaymentHistory>
      },

      //Admin Route

      {
        path:'adminhome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'allusers',
        element:<AdminRoute><Allusers></Allusers></AdminRoute>
      },
      {
        path: 'additems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageitems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      }
    ]
  }
]);



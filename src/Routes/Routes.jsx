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
        path: 'mycart',
        element:<MyCart></MyCart>
      }
    ]
  }
]);



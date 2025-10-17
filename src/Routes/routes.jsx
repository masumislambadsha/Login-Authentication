import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import Signup from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path:'/',
    Component:MainLayout,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path:'/about-us',
        Component: AboutUs
      },
      {
        path:'profile',
        Component: Profile
      },
      {
        path:"/signin",
        Component: SignIn
      },
      {
        path:"/signup",
        Component: Signup
      }
    ]
  }
]);

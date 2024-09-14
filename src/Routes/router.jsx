import {
     createBrowserRouter,
     RouterProvider,
   } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Error from "../Pages/Shared/Error/Error";
import FAQ from "../Pages/FAQ/FAQ";
import Testimonials from "../Pages/Testimonials/Testimonials";
import HowItWork from "../Pages/How it Work/HowItWork/HowItWork";
import Catering from "../Pages/Catering/Catering/Catering";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import Dashboard from "../LayOut/Dashboard";
import ManageMenu from "../Pages/Dashboard/Admin/ManageMenu/ManageMenu";
import AddFood from "../Pages/Dashboard/Admin/AddFood/AddFood";
   
   
export  const router = createBrowserRouter([
     {
       path: "/",
       element: <Root></Root>,
       children:[
          {
               path:'/',
               element:<Home></Home>
          },
          {
               path:'/ourMenu',
               element:<OurMenu></OurMenu>
          },{
               path:'/faq',
               element:<FAQ></FAQ>
          },{
               path:'/testimonials',
               element:<Testimonials></Testimonials>
          },
          {
               path:'/howItWork',
               element:<HowItWork></HowItWork>
          },{
               path:'/catering',
               element:<Catering></Catering>
          },{
               path:'/login',
               element:<Login></Login>
          },
          {
               path:'/signUp',
               element:<SignUp></SignUp>
          }
       ]
     },
     {
          path:'/dashboard',
          element:<Dashboard></Dashboard>,
          children:[
               {
                    path:'manageMenu',
                    element:<ManageMenu></ManageMenu>
               },{
                    path:'addFood',
                    element:<AddFood></AddFood>
               }
          ]
     },
     {
          path:'*',
          element:<Error></Error>
     }
   ]);
   
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
          path:'*',
          element:<Error></Error>
     }
   ]);
   
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
               path:'ourMenu',
               element:<OurMenu></OurMenu>
          },{
               path:'faq',
               element:<FAQ></FAQ>
          },{
               path:'testimonials',
               element:<Testimonials></Testimonials>
          }
       ]
     },
     {
          path:'*',
          element:<Error></Error>
     }
   ]);
   
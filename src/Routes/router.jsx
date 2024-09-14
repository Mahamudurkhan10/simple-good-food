import {
     createBrowserRouter,
     RouterProvider,
   } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home/Home/Home";
   
   
export  const router = createBrowserRouter([
     {
       path: "/",
       element: <Root></Root>,
       children:[
          {
               path:'/',
               element:<Home></Home>
          }
       ]
     },
   ]);
   
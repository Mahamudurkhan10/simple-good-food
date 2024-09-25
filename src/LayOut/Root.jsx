import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';


const Root = () => {
     return (
          <div className='container mx-auto '>
                 <Navbar></Navbar>
               <div className='mt-36'>
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default Root;
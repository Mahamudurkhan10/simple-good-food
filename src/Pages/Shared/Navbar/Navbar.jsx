import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Components/Provider/AuthProvider';
import { SlLogout } from 'react-icons/sl';

const Navbar = () => {
     const { user, logOut } = useContext(AuthContext);
     const [dropdownOpen, setDropdownOpen] = useState(false);
     const signOut = () => {
          logOut();
          setDropdownOpen(false);
     };

     const toggleDropdown = () => {
          setDropdownOpen(!dropdownOpen);
     };
     const navItems = <div className='flex   flex-col lg:flex-row lg:mr-9'>
            <NavLink className={({isActive})=>isActive?'font-bold text-success':'font-semibold'} to={'/'}> <li><a> Home</a></li></NavLink> 
            <NavLink className={({isActive})=>isActive?'font-bold text-success border-l-2 px-3':'font-semibold border-l-2 px-2'} to={'/ourMenu'}> <li><a> our menu</a></li></NavLink> 
            <NavLink className={({isActive})=>isActive?'font-bold text-success border-l-2 px-3':'font-semibold border-l-2 px-2'} to={'/b'}> <li><a> Meals plan</a></li></NavLink> 
            <NavLink className={({isActive})=>isActive?'font-bold text-success border-l-2 px-3':'font-semibold border-l-2 px-2'} to={'/catering'}> <li><a>Catering</a></li></NavLink> 
            <NavLink className={({isActive})=>isActive?'font-bold text-success border-l-2 px-3':'font-semibold border-l-2 px-2'} to={'/howItWork'}> <li><a>How it work</a></li></NavLink> 
            <NavLink className={({isActive})=>isActive?'font-bold text-success border-l-2 px-3':'font-semibold border-l-2 px-2'} to={'/testimonials'}> <li><a>Testimonials</a></li></NavLink> 
            <NavLink className={({isActive})=>isActive?'font-bold text-success border-l-2 px-3':'font-semibold border-l-2 px-2'} to={'/faq'}> <li><a>FAQ</a></li></NavLink> 
          
     </div>
         const navItem2 = (


          <>

               <li> <NavLink to={'/dashboard'} className={"btn bg-[#6ea963] text-white "}> <a href=""> Dashboard </a> </NavLink> </li>
               <li><button onClick={signOut} className="btn bg-[#6ea963]   text-white flex items-center"><SlLogout />Logout</button></li>
          </>
     );
     return (
          <div className=' '>
               <div className='text-center text-[14px] text-white rounded-xl bg-[#fdb64e] p-3'>
                    <> %%   Free shipping on all orders   %% </>
               </div>
               <div className="navbar container bg-base-100">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             strokeWidth="2"
                                             d="M4 6h16M4 12h8m-8 6h16" />
                                   </svg>
                              </div>
                              <ul
                                   tabIndex={0}
                                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                   {navItems}
                                  
                              </ul>
                         </div>
                         <a className="text-xl"> <img  src="https://i.ibb.co.com/4VDc55j/305708784-514923217301661-1311194014409716321-n-1.png" alt="" /> </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1">
                             
                             {navItems}
                              
                         </ul>
                    </div>
                    <div className="navbar-end ">
                    <div className="dropdown dropdown-end">
                         
                    {user ? (
                                   <div>
                                        <div
                                             tabIndex={0}
                                             role="button"
                                             className="btn btn-ghost btn-circle avatar"
                                             onClick={toggleDropdown}
                                        >
                                             <div className="w-10 rounded-full">
                                                  <img className="rounded-full size-10 mr-3 border-2 border-red-600" src={user?.photoURL || "https://i.ibb.co/YX7cm4v/bd886d7ccc6f8dd8db17e841233c9656.jpg"} title={user.displayName} />
                                             </div>
                                        </div>
                                        {dropdownOpen && (
                                             <ul className="menu space-y-3 text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#191919] rounded-box w-52">
                                                  {navItem2}
                                             </ul>
                                        )}
                                   </div>
                              ) : (
                                   <div className='flex gap-4'>
                                   <Link to={'/login'} className="btn border text-[#6ea963] hover:text-white border-[#6ea963] btn-outline hover:bg-[#6ea963] px-5">log in</Link>
                                   <Link to={'/signUp'} className="btn text-[#6ea963] hover:text-white border border-[#6ea963] px-5 hover:bg-[#6ea963]">SignUp</Link>
                                   </div>
                              )}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
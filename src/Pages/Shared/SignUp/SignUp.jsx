import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
     return (
          <div>
               <div className=" lg:w-4/5  mt-5  mx-auto md:flex">
                    <div className="flex-1">
                         <img src="https://i.ibb.co.com/fvYNyt3/Rectangle-1292.png" className='lg:h-[760px] ' alt="" />
                    </div>

                    <div style={{ backgroundImage: "url('https://i.ibb.co.com/s3mdJTR/Rectangle-1290.png')" }} className="flex bg-center bg-no-repeat lg:w-1/2  justify-center lg:p-12  p-0 items-center ">
                         <form className="bg-white  p-4 rounded-xl">
                              <h1 className="text-gray-800 font-bold text-2xl mb-1">Sign up</h1>
                              <p className="text-sm font-normal text-gray-600 mb-7">Please Enter Your Personal Data</p>
                             <div className='text-start font-semibold'>
                             <label className='' htmlFor=""> Full Name</label>
                             <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                   
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                   </svg>
                                   <input className="pl-2 outline-none border-none" type="text" placeholder="Full name" />
                              </div>
                             </div>
                             <div className='text-start font-semibold'>
                              <label htmlFor=""> Permanent Address </label>
                             <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                  
                                   <input className="pl-2 outline-none border-none" type="text" placeholder="R no 1 , Block B, CITY X, USA" />
                              </div>
                             </div>
                           <div className='text-start'>
                              <label htmlFor="">Email</label>
                           <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                   </svg>
                                   <input className="pl-2 outline-none border-none" type="email" placeholder="Email Address" />
                              </div>
                           </div>
                           <div className='text-start'>
                              <label htmlFor="">Contact Number</label>
                           <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                   </svg>
                                   <input className="pl-2 outline-none border-none" type="text" placeholder="contact number" />
                              </div>
                           </div>
                           <div className='text-start font-semibold'>
                              <label htmlFor="">Password</label>
                           <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                   </svg>
                                   <input className="pl-2 outline-none border-none" type="password" placeholder="Password" />
                              </div>
                           </div>
                              <button type="submit" className="block w-full bg-[#6ea963] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">SignUp</button>
                              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer"> Have any account? <Link to={'/login'} className='btn btn-ghost text-yellow-700 font-semibold text-xl'> Login </Link> </span>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default SignUp;
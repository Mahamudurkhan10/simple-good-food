import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Components/Provider/AuthProvider';

const Login = () => {
     const {user,SignIn} = useContext(AuthContext)
     const navigate = useNavigate()
     const location = useLocation()
     const form = location.state?.form?.pathname || "/";
     const handleLogin = (e) =>{
          e.preventDefault()
          const email = e.target.email.value 
          const password = e.target.password.value 
          console.log(email,password);
          SignIn(email,password )
          .then(()=>{
               return navigate(form,{replace: true})
          })
          .catch(error =>{
               console.log("Error",error);
              
          })
     }
     return (
          <div>
               <div className=" lg:w-2/3 mx-auto md:flex">
                    <div className="flex-1">
                         <img src="https://i.ibb.co.com/fvYNyt3/Rectangle-1292.png" className='lg:h-[710px]' alt="" />
                    </div>

                    <div style={{ backgroundImage: "url('https://i.ibb.co.com/s3mdJTR/Rectangle-1290.png')" }} className="flex bg-center bg-no-repeat  md:w-1/2  justify-center lg:p-12  items-center ">
                         <form onSubmit={handleLogin} className="bg-white  p-4 rounded-xl">
                              <h1 className="text-gray-800 font-bold text-2xl mb-1">Login</h1>
                              <p className="text-sm font-normal text-gray-600 mb-7">Please enter your email and password to continue</p>
                       
                      
                              <div className='text-start'>
                                   <label htmlFor="">Email</label>
                                   <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                        <input className="pl-2 outline-none border-none" name='email' type="email" placeholder="Email Address" />
                                   </div>
                              </div>
                           
                              <div className='text-start font-semibold'>
                                   <label htmlFor="">Password</label>
                                   <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                             <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                        <input className="pl-2 outline-none border-none" name='password' type="password" placeholder="Password" />
                                   </div>
                              </div>
                              <button type="submit" className="block w-full bg-[#6ea963] mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer"> Don't Have any account? <Link to={'/signUp'} className='btn btn-ghost text-yellow-700 font-semibold text-xl'> SignUp </Link> </span>
                         </form>
                    </div>
               </div>
          </div>


     );
};

export default Login;
import React from 'react';

const Footer = () => {
     return (
          <div className='mt-12'>
               <footer className=" divide-y dark:bg-gray-50 dark:text-gray-800">
                    <div className="   flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                         <div className="lg:w-1/3">
                              <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                                   <div className="">
                                        <img className='size-24' src="https://i.ibb.co.com/4VDc55j/305708784-514923217301661-1311194014409716321-n-1.png" alt="" />
                                   </div>

                              </a>
                         </div>
                         <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                              <div className="space-y-3">
                                   <h3 className="tracking-wide uppercase dark:text-gray-900">Home</h3>
                                   <ul className="space-y-1">
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Our Menu</a>
                                        </li>
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Meal plans</a>
                                        </li>
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Catering</a>
                                        </li>
                                       
                                   </ul>
                              </div>
                              <div className="space-y-3">
                                   <h3 className="tracking-wide uppercase dark:text-gray-900">How it Work</h3>
                                   <ul className="space-y-1">
                                        <li>
                                             <a rel="noopener noreferrer" href="#">Testimonials</a>
                                        </li>
                                        <li>
                                             <a rel="noopener noreferrer" href="#">FAQ</a>
                                        </li>
                                   </ul>
                              </div>
                              <div className=' col-span-2'>
                                   <h1 className='text-xl font-semibold'> Subscribe To Our Email Alerts</h1>
                                   <div>
                                        <form className='flex gap-4 mt-3' action="">
                                             <label className='flex border w-full' htmlFor="">
                                                  <input
                                                       type="email"
                                                       placeholder="your @email please"
                                                       className="input input-bordered input-primary w-full max-w-xs" />

                                             </label>
                                             <button className='btn bg-[#6ea963] text-white '> Subscribe </button>
                                        </form>
                                   </div>
                                   <div className='flex gap-4 mt-5'>
                                        <img className='rounded-full size-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s" alt="" />
                                        <img className='rounded-full size-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="" />
                                        <img  className='rounded-full size-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLfFlqscuA2It5Knmn3lI8ldlO_cw-OFYjg&s" alt="" />
                                        <img className='rounded-full size-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fj1vqat9XLO4cFwOG1uFqLXYDcISiYil2w&s" alt="" />
                                   </div>
                              </div>

                         </div>
                    </div>
                    <div className="py-3 text-sm bg-[#191919] text-center text-white">© 1968 Company Co. All rights reserved.</div>
               </footer>
          </div>
     );
};

export default Footer;
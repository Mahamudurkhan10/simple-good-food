import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HowItWorkFAQ = () => {
     return (
          <div className='mt-12 mb-24'>
               <div className='flex container flex-col lg:flex-row gap-6 items-start '>
                    <div className='flex-1'>
                         <section className=" dark:text-gray-800">
                              <div className=" text-start  flex flex-col justify-center  mx-auto ">

                                   <h2 className="mb-5 text-start text-4xl font-bold   sm:text-5xl">How it Works</h2>
                                   <p>Your food should match your effort. Our tasty meal plans and tailored macros support your fitness and weight goals.</p>
                                   <div className='mt-5 flex flex-col gap-3'>
                                        <div className="collapse border-2 ">
                                             <input type="checkbox" />
                                             <div className="collapse-title flex justify-between text-xl font-medium">What if I don't eat them all at once?<FaArrowRight className='text-yellow-700'></FaArrowRight> </div>
                                             <div className="collapse-content">
                                                  <p>hello</p>
                                             </div>
                                        </div>
                                        <div className="collapse border-2 ">
                                             <input type="checkbox" />
                                             <div className="collapse-title flex justify-between text-xl font-medium">How long do my meals last?<FaArrowRight className='text-yellow-700'></FaArrowRight> </div>
                                             <div className="collapse-content">
                                                  <p>hello</p>
                                             </div>
                                        </div>
                                        <div className="collapse border-2 ">
                                             <input type="checkbox" />
                                             <div className="collapse-title flex justify-between text-xl font-medium">How long do my meals last? <FaArrowRight className='text-yellow-700'></FaArrowRight> </div>
                                             <div className="collapse-content">
                                                  <p>hello</p>
                                             </div>
                                        </div>
                                     
                                        <div className="collapse  border-2 ">
                                             <input type="checkbox" />
                                             <div className="collapse-title flex justify-between text-xl font-medium">What's in the food? Is it organic? Is it gluten free? <FaArrowRight className='text-yellow-700'></FaArrowRight>  </div>
                                             <div className="collapse-content">
                                                  <p>hello</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>
                    </div>
                    <div>
                         <img src="https://i.ibb.co.com/3WwP7pV/Rectangle-5239.png" alt="" />
                    </div>
               </div>
          </div>
     );
};

export default HowItWorkFAQ;
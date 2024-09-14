import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaRotateRight } from 'react-icons/fa6';

const AskQuestion = () => {
     return (
          <div>
               <section className=" dark:text-gray-800">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">

                         <h2 className="mb-5 text-4xl font-bold leading-none text-center sm:text-5xl">Popular Frequently Asked Questions</h2>
                         <p>Simply Good Food prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?</p>
                         <div className='mt-5 flex flex-col gap-3'>
                              <div className="collapse border-2 ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">What are the foods like Steel Yat? How does the mail plan work? <FaArrowRight className='text-yellow-700'></FaArrowRight> </div>
                                   <div className="collapse-content">
                                        <p>hello</p>
                                   </div>
                              </div>
                              <div className="collapse border-2 ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">How Do I Eat Fresh and Lean? <FaArrowRight className='text-yellow-700'></FaArrowRight> </div>
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
                              <div className="collapse border-2 ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">What if I don't eat them all at once? <FaArrowRight className='text-yellow-700'></FaArrowRight> </div>
                                   <div className="collapse-content">
                                        <p>hello</p>
                                   </div>
                              </div>
                              <div className="collapse  border-2 ">
                                   <input type="checkbox" />
                                   <div className="collapse-title flex justify-between text-xl font-medium">What's in the food? Is it organic? Is it gluten free? <FaArrowRight  className='text-yellow-700'></FaArrowRight>  </div>
                                   <div className="collapse-content">
                                        <p>hello</p>
                                   </div>
                              </div>    
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default AskQuestion;
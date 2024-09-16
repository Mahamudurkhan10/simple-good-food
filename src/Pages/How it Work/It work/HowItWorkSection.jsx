import React from 'react';

const HowItWorkSection = () => {
     return (
          <div className='bg-gray-50 rounded-xl mt-5 mb-5'>
               <div className='text-start   pt-4'>
                    <h1 className='text-5xl font-semibold'>How it Works</h1>
                    <p className='text-lg w-2/3 py-3'> Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we’ll take care of the rest. </p>
                    <div className=' grid grid-cols-1  lg:grid-cols-2 gap-6 lg:p-16 lg:pr-4'>
                         <div className='flex  border-4 border-base-100 lg:border-0 gap-5 '>
                              <img src="https://i.ibb.co.com/FgYf6Rh/Group.png" alt="" />
                              <div>
                                   <h1 className='text-xl font-semibold'>  Weekly Delivery </h1>
                                   <p className='lg:w-4/5'> Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we’ll take care of the rest. </p>
                              </div>
                         </div>
                         <div className='flex  border-4 border-base-100 lg:border-0 gap-5 '>
                              <img src="https://i.ibb.co.com/nc5KfVf/fi-3037017.png" alt="" />
                              <div>
                                   <h1 className='text-xl font-semibold'>  Cancel Anytime </h1>
                                   <p className='lg:w-4/5'> Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we’ll take care of the rest.</p>
                              </div>
                         </div>
                         <div className='flex border-4 border-base-100  lg:border-0 gap-5 '>
                              <img src="https://i.ibb.co.com/99xGR6f/fi-7259327.png" alt="" />
                              <div>
                                   <h1 className='text-xl font-semibold'>  Pause Anytime</h1>
                                   <p className='lg:w-4/5'> Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we’ll take care of the rest. </p>
                              </div>
                         </div>
                         <div className='flex border-4 border-base-100  lg:border-0  gap-5 '>
                              <img src="https://i.ibb.co.com/MST0rgv/fi-7046164.png" alt="" />
                              <div>
                                   <h1 className='text-xl font-semibold'>  Pause Anytime</h1>
                                   <p className='lg:w-4/5'> Subscribe for free shipping. Just pick your meals, tell us how often you want them,and then we’ll take care of the rest. </p>
                              </div>
                         </div>
                        
                    </div>
               </div>
          </div>
     );
};

export default HowItWorkSection;
import React from 'react';

const Occasion = () => {
     return (
          <div className='mt-5'>
               <div>
                    <h1 className='text-5xl font-semibold text-center'> Perfect for any occasion </h1>
               </div>
               <div className='flex gap-6 p-24 pt-12 '>
                    <div className='bg-[#f1eef1] p-12'>
                         <img className='mx-auto' src="https://i.ibb.co.com/2Fwsk9L/fi-3222642.png" alt="" />
                         <h1 className='text-2xl py-3 font-semibold'>Business Catering </h1>
                         <p className=' mx-auto'> Catering everyone will love, with convenient delivery and setup included,  </p>
                         <div className='text-start py-3'>
                         <li> Holiday Parties </li>
                          <li> Office Meetings </li>
                          <li> Employee Appreciation</li>
                         </div>
                    </div>
                    <div className='bg-[#e9f2e8] p-12'>
                         <img className='mx-auto' src="https://i.ibb.co.com/wz9VsDd/fi-3438139.png" alt="" />
                         <h1 className='text-2xl py-3 font-semibold'>Event Catering</h1>
                         <p className=' mx-auto'> Celebrate life's special moments with a meal everyone will love.</p>
                         <div className='text-start py-3'>
                         <li> Birthday</li>
                          <li> Anniversary</li>
                          <li> Family & Friends Gathering</li>
                          <li> School Function</li>
                         </div>
                    </div>
                    <div className='bg-[#f1eef1] p-12'>
                         <img className='mx-auto' src="https://i.ibb.co.com/s6MtdFn/fi-2270962.png" alt="" />
                         <h1 className='text-2xl py-3 font-semibold'>Bridal Category</h1>
                         <p className=' mx-auto'> A once in a lifetime moment calls for an unforgettable meal.</p>
                         <div className='text-start py-3'>
                         <li> Rehearsal Dinner </li>
                          <li> Wedding</li>
                          <li> Bridal Shower</li>
                         </div>
                    </div>
                   
               </div>
          </div>
     );
};

export default Occasion;
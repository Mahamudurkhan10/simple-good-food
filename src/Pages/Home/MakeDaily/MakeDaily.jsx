import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

const MakeDaily = () => {
     return (
          <div className='flex justify-between flex-col-reverse  lg:flex-row mt-16 '>
               <div className='bg-[#c4c4c4] lg:w-1/2'>
                         <div className='lg:my-[135px] p-5   bg-white text-start w-5/6 rounded-r-full '>
                              <div className='lg:ml-9'>
                              <h1 className='lg:text-3xl font-semibold text-2xl'> Make daily meals 
                              healthy and moderate</h1>
                              <p className='py-4'>Ingredients are naturally rich and full of taste.</p>
                              <button className='btn bg-[#fdb64e]'> Meal plans <MdArrowOutward></MdArrowOutward> </button>
                              </div>
                         </div>
               </div>
               <div>
                    <img src="https://i.ibb.co.com/RQTNYdr/Rectangle-49.png" alt="" />
               </div>
          </div>
     );
};

export default MakeDaily;
import React from 'react';
import { MdEmail, MdLocationPin, MdPhone, MdTimer } from 'react-icons/md';

const LocationSection = () => {
     return (
          <div className='flex bg-gray-50 gap-5'>
               <div className='flex-1'>
                    <img src="https://i.ibb.co.com/YpSQ0pt/Rectangle-5245.png" alt="" />

               </div>
               <div className='flex-1 bg-[#3e3e3e] m-4  '>
                      <div className=''>
                         <div className=' text-start text-white pl-5 space-y-3 pt-5 '>
                              <h1 className='text-2xl font-semibold'> Contact Us </h1>
                              <h1 className='flex items-center gap-2'> <MdLocationPin></MdLocationPin> Tangail,Dhaka,Bangladesh </h1>
                              <h1 className='flex items-center gap-2'> <MdPhone></MdPhone> +01608523211 </h1>
                              <h1 className='flex items-center gap-2'> <MdEmail></MdEmail> mahamudurkhan10@gmail.com </h1>
                              <h1 className='flex items-center gap-2'> <MdTimer></MdTimer> 9.00am - 9.00pm</h1>
                            

                         </div>
                         
                    </div>
               </div>
          </div>
     );
};

export default LocationSection;
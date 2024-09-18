import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const Banner = () => {
     return (
          <div
               
               className=' '
          >
             <div style={{ backgroundImage: "url('https://i.ibb.co/3Mjm4Fr/Rectangle-1.png')" }} className=' h-[650px]  flex  flex-col-reverse lg:flex-row justify-around lg:text-start items-center pt-5'>
             <div className='lg:w-1/2'>
                    <h1 className='lg:text-6xl  text-4xl font-semibold'>
                         Keep track of{' '}
                         <span className='lg:text-6xl text-4xl text-green-600'>Fitness Goal</span>
                    </h1>
                    <p className='lg:text-2xl text-xl py-4'>Order on Simply Good Food</p>
                    <button className='btn bg-[#fdb64e] hover:bg-[#fdb64e]'>Explore Menu <MdArrowOutward /> </button>
               </div>
               <div className='relative'>
                    <img
                         className='relative  border-blue-700'
                         src='https://i.ibb.co/pnfMyN8/Subtract.png'
                         alt='Banner decoration'
                    />
                    <img
                         className='absolute  lg:-mt-[441px] lg:ml-[110px] -mt-[300px] ml-[50px] w-[250px] lg:w-[340px]'
                         src='https://i.ibb.co/4pHkFcs/Mask-group.png'
                         alt='Fitness illustration'
                    />
               </div>
             </div>
             <div>
               
             </div>
          </div>
     );
};

export default Banner;

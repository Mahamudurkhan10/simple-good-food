import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const Banner = () => {
     return (
          <div
               style={{ backgroundImage: "url('https://i.ibb.co/3Mjm4Fr/Rectangle-1.png')" }}
               className='  mt-5 bg-cover lg:h-[650px] bg-center flex lg:flex-col flex-col-reverse'
          >
             <div className='container flex  flex-col-reverse lg:flex-row justify-between lg:text-start items-center pt-5'>
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
               <button className='lg:ml-[1000px] ml-[250px] bg-[#6ea963]  rounded-full p-6'> <FaShoppingCart className='text-white text-2xl relative'></FaShoppingCart> <span className='absolute text-white -mt-11 '>0</span>  </button>
             </div>
          </div>
     );
};

export default Banner;

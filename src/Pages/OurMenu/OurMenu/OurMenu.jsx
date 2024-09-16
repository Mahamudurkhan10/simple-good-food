import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../../Components/Hooks/useAxiosPublic';
import MenuCard from '../../Home/TrendingMenu/MenuCard';
import useMenus from '../../../Components/Hooks/useMenus';

const OurMenu = () => {
     const [menus, refetch, loading] = useMenus()
     const axiosPublic = useAxiosPublic()

     if (loading) {
          return <div className="flex flex-row justify-center space-x-4">
               <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent"></div>

               <div className="w-12 h-12 rounded-full animate-spin border-2 border-dashed border-indigo-500 border-t-transparent"></div>

               <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent"></div>

               <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent">
               </div>
          </div>;
     }
     return (
          <div>
               <div className='flex gap-4 m-5  '>
                    <button className='btn hover:bg-yellow-600 hover:text-white'> Full menus </button>
                    <button className='btn hover:bg-yellow-600 hover:text-white'> Enteree</button>
                    <button className='btn hover:bg-yellow-600 hover:text-white'> Breakfast</button>
                    <button className='btn hover:bg-yellow-600 hover:text-white'> Snacks</button>
               </div>
               <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {menus.map(food => <MenuCard key={food._id} food={food}></MenuCard>)}
               </div>
          </div>
     );
};

export default OurMenu;
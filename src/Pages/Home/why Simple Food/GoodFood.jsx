import React from 'react';

const GoodFood = () => {
     return (
          <div className='mt-5  '>
             <div>
               <h1 className='text-5xl  font-semibold text-center'> Why Simply Good Food  </h1>
             </div>
               <div className='grid grid-cols-1 mt-9 lg:grid-cols-3 gap-5'>
                    <div className='p-4'>
                         <img src="https://i.ibb.co.com/D1YzG27/fi-12192596.png" className=' mx-auto' alt="" />
                         <h1 className='text-2xl py-2'> Health awareness</h1>
                         <p>Our portions are bigger. Meals designed to fill you up with the nutrients you need to perform at your best.</p>
                    </div>
                    <div className='p-4'>
                         <img src="https://i.ibb.co.com/q14397g/fi-2736046.png" className='mx-auto' alt="" />
                         <h1 className='text-2xl py-2'> More Protein</h1>
                         <p>Protein-rich meals to FUEL your workouts, improve recuperation, and increase outcomes.</p>
                    </div>
                    <div className='p-4'>
                         <img src="https://i.ibb.co.com/HpFGsc6/fi-11790528.png" className='mx-auto' alt="" />
                         <h1 className='text-2xl py-2'> Unending Variety</h1>
                         <p>Select breakfasts, snacks, and bulk proteins/sides. You can change it up at any moment or stick with the same routine.</p>
                    </div>
               </div>
          </div>
     );
};

export default GoodFood;
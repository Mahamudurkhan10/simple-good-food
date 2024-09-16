import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
     return (
          <div style={{ backgroundImage: "url('https://i.ibb.co.com/fvYNyt3/Rectangle-1292.png')" }}
          className='  mt-5 bg-cover lg:h-[650px] bg-center opacity-95  '>
               <section className="flex items-center h-full p-16 dark:text-gray-800">
                    <div className="  flex flex-col items-center justify-center px-5 mx-auto my-8">
                         <div className="max-w-md text-center">
                              <h2 className="mb-8 font-extrabold text-6xl dark:text-gray-50">
                              404 Not Found
                              </h2>
                              <p className="text-2xl font-semibold text-white md:text-3xl">Sorry, we couldn't find this page.</p>
                              <p className="mt-4 mb-8 dark:text-black">But don't worry, you can find plenty of other things on our homepage.</p>
                              <Link to={'/'} rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</Link>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default Error;

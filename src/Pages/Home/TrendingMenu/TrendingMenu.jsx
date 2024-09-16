import React, { useEffect, useState, useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import MenuCard from './MenuCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import useAxiosPublic from '../../../Components/Hooks/useAxiosPublic';

const TrendingMenu = () => {
  const [foods, setFoods] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const axiosPublic = useAxiosPublic()
  console.log(foods);
  useEffect(() => {
       axiosPublic('/menus')
      
      .then((res) => setFoods(res.data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

 


  return (
    <div className='relative'>
      <div>
        <h1 className='text-5xl font-semibold text-center py-3'>New & Trending Menu</h1>
      </div>

    <div>
    <div className='mt-6   mx-auto '>
        {foods.length > 0 && (
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination,Autoplay]}
            autoplay={{delay:2000}}
            spaceBetween={20}
            
            pagination={{ clickable: true, type: 'custom' }}
            navigation={true}
         
            initialSlide={0}
            
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {foods.map((food) => (
              <SwiperSlide key={food._id}>
                <div className='p-2'><MenuCard key={food._id} food={food} /></div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

       
      </div>
    
    </div>
    </div>
  );
};

export default TrendingMenu;

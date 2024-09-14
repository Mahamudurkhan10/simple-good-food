import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import MenuCard from './MenuCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TrendingMenu = () => {
  const [foods, setFoods] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch('/menu.json')
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className='relative'>
      <div>
        <h1 className='text-5xl font-semibold text-center py-3'>New & Trending Menu</h1>
      </div>

    <div>
    <div className='mt-6 container mx-auto relative'>
        {foods.length > 0 && (
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true, type: 'custom' }}
            navigation={false}
            onSlideChange={handleSlideChange}
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
              <SwiperSlide key={food.id}>
                <div className='p-2'><MenuCard food={food} /></div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

       
      </div>
      <div className='absolute  left-0 right-0 flex justify-between top-[300px] '>
          <button
            onClick={goToPreviousSlide}
            className={` text-xl p-2 rounded-full hover:bg-gray-700 ${
              currentIndex === 0 ? 'text-gray-500 cursor-not-allowed' : ''
            }`}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={goToNextSlide}
            className=' text-xl    p-2 rounded-full hover:bg-gray-700'
          >
            <FaArrowRight />
          </button>
        </div>
    </div>
    </div>
  );
};

export default TrendingMenu;

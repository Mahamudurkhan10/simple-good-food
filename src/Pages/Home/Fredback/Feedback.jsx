import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Feedback = () => {
  const [foods, setFoods] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
 console.log(foods);
  useEffect(() => {
    fetch('/feedback.json')
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error('Error fetching menu:', error));
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };



  return (
    <div className='relative'>
      <div>
        <h1 className='text-5xl font-semibold text-center py-3'>FeedBacks</h1>
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
                slidesPerView: 2,
              },
            }}
          >
            {foods.map((food) => (
              <SwiperSlide key={food.id}>
                <div className='p-2'>
                   <div className='flex gap-5 '>
                   <div>
                        <img className=' w-full rounded-full' src={food.image} alt="" />
                    </div>
                 
                   <div className='text-start'>
                     <h1 className='text-xl font-semibold'> {food.name} </h1>
                     <p className='text-yellow-600 font-semibold'> {food.title} </p>
                      <p> {food.feedback} </p>
                   </div>
                   </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

       
      </div>
      
    </div>
    </div>
  );
};

export default Feedback;

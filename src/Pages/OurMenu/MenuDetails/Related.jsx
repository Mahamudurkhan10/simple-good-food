import React, { useEffect, useState, useRef } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import useAxiosPublic from '../../../Components/Hooks/useAxiosPublic';
import MenuCard from '../../Home/TrendingMenu/MenuCard';
import RelatedCard from './RelatedCard';

const Related = () => {
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

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  

  return (
    <div className='relative'>
      <div>
        <h1 className='text-5xl font-semibold text-start py-3'>Related Products</h1>
      </div>

    <div>
    <div className='mt-3   mx-auto relative'>
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
                slidesPerView: 4,
              },
            }}
          >
            {foods.map((food) => (
              <SwiperSlide key={food._id}>
                <div className='p-2'><RelatedCard key={food._id} food={food} /></div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

       
      </div>
      
    </div>
    </div>
  );
};

export default Related;

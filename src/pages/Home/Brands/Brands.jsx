import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import brand1 from '../../../assets/brands/amazon.png';
import brand2 from '../../../assets/brands/amazon_vector.png';
import brand3 from '../../../assets/brands/casio.png';
import brand4 from '../../../assets/brands/moonstar.png';
import brand5 from '../../../assets/brands/randstad.png';
import brand6 from '../../../assets/brands/star.png';
import brand7 from '../../../assets/brands/start_people.png';


const Brands = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            grabCursor={true}
        >
            <SwiperSlide><img src={brand1} alt="Brand 1" /></SwiperSlide>
            <SwiperSlide><img src={brand2} alt="Brand 2" /></SwiperSlide>
            <SwiperSlide><img src={brand3} alt="Brand 3" /></SwiperSlide>
            <SwiperSlide><img src={brand4} alt="Brand 4" /></SwiperSlide>
            <SwiperSlide><img src={brand5} alt="Brand 5" /></SwiperSlide>
            <SwiperSlide><img src={brand6} alt="Brand 6" /></SwiperSlide>
            <SwiperSlide><img src={brand7} alt="Brand 7" /></SwiperSlide>
        </Swiper>
    );
};

export default Brands;
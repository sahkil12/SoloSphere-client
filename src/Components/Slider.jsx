// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import banner1 from '../assets/images/carousel1.jpg'
import banner2 from '../assets/images/carousel2.jpg'
import banner3 from '../assets/images/carousel3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SlideBanner from './SlideBanner';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className=''>
                    <SlideBanner img={banner1} title={'Find Your Dream Freelance Job Today'} subtitle={'Join thousands of freelancers and clients connecting every day. Work from anywhere, anytime.'}></SlideBanner>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <SlideBanner img={banner2} title={'Hire the Right Talent for Your Project'} subtitle={'Post your job in minutes and get matched with skilled freelancers ready to deliver quality work.'}></SlideBanner>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <SlideBanner img={banner3} title={'Grow Your Career, One Project at a Time'} subtitle={'Build your portfolio, earn money, and collaborate with global clients on real projects.'}></SlideBanner>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

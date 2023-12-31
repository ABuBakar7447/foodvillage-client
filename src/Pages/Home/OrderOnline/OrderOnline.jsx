import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination,Autoplay } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import Title from '../../../Component/Title/Title';


const OrderOnline = () => {

    return (
        <div className='mb-12'>
            <Title heading={"From 11.00am to 8.00pm"} subheading={"Order Online"}></Title>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper w-3/4 mx-auto"
            >
                <SwiperSlide className='mb-12'>
                    <img src={img1} alt="" />
                    <p className='-mt-12 text-center md:text-2xl font-semibold uppercase text-slate-600'>salad</p>
                </SwiperSlide>
                <SwiperSlide className='mb-12'>
                    <img src={img2} alt="" />
                    <p className='-mt-12 text-center md:text-2xl font-semibold uppercase text-slate-600'>soup</p>
                </SwiperSlide>
                <SwiperSlide className='mb-12'>
                    <img src={img3} alt="" />
                    <p className='-mt-12 text-center md:text-2xl font-semibold uppercase text-slate-600'>pizza</p>
                </SwiperSlide>
                <SwiperSlide className='mb-12'>
                    <img src={img4} alt="" />
                    <p className='-mt-12 text-center md:text-2xl font-semibold uppercase text-slate-600'>dessert</p>
                </SwiperSlide>
                <SwiperSlide className='mb-12'>
                    <img src={img5} alt="" />
                    <p className='-mt-12 text-center md:text-2xl font-semibold uppercase text-slate-600'>salad</p>
                </SwiperSlide>

                

            </Swiper>
        </div>
    );
};

export default OrderOnline;
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

import Title from "../../../Component/Title/Title";
import img1 from '../../../assets/home/inverted-commas_102571.png'


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    return (
        <div className="my-16">

            <Title heading={"What Our Client Says"} subheading={"Testimonial"}></Title>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-11/12"
            >


                <div className="">
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>

                                <div className="w-3/4 flex flex-col items-center text-center mb-8 mx-auto">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                        className="my-5"
                                    />
                                    <img src={img1} className="w-24 h-22 my-8" alt="" />
                                    <p >{review.details}</p>
                                    <p className="text-2xl text-yellow-600 font-semibold m-3">{review.name}</p>
                                </div>
                            </SwiperSlide>)
                    }
                </div>
            </Swiper>



        </div>
    );
};

export default Reviews;
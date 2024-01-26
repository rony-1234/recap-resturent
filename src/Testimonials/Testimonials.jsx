import SectionTitle from "../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
const Testimonials = () => {
    // const [reviews, setReviews] = useState([])

    // useEffect(()=>{
    //     fetch('review.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setReviews(data)
    //     })}
    // ,[])
    return (
        <div>
            <SectionTitle 
            
             subHeading='What Our Client Says'
             heading='Testimonials'
            
            ></SectionTitle>

       <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* {
            reviews.map(review =><SwiperSlide key={review._id}>
                <div>
                    <p>{review.details}</p>
                </div>

            </SwiperSlide>)
        } */}
      
       </Swiper>
            
        </div>
    );
};

export default Testimonials;
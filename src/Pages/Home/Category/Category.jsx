import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';



const Category = () => {
    return (
        <section>
             <SectionTitle className='text-center '
        subHeading='---From 11am to 10.00pm'
        heading='ORDER ONLINE'
        ></SectionTitle> 
        <Swiper
        // install Swiper modules
     

        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src={img1}/>
        <h3 className='text-3xl uppercase text-center -mt-16'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img2}/>
        <h3 className='text-3xl uppercase text-center -mt-16'>Soup</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img3}/>
        <h3 className='text-3xl uppercase text-center -mt-16'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img4}/>
        <h3 className='text-3xl uppercase text-center -mt-16'>Dessert</h3>
        </SwiperSlide>
        <SwiperSlide><img src={img5}/>
        <h3 className='text-3xl uppercase text-center -mt-16'>Dessert</h3>
        </SwiperSlide>
        ...
      </Swiper>
      </section>
    );
};

export default Category;
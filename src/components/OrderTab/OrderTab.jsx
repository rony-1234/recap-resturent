import FoodCard from "../FoodCard/FoodCard";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from "swiper/modules";

const OrderTab = ({items}) => {
    return (
      
  
    <div className="grid grid-cols-3 gap-8 my-6">
          {
            items.map(item =><FoodCard key={item._id} item={item}></FoodCard>)
          }
         </div>
  
    );
};

export default OrderTab;
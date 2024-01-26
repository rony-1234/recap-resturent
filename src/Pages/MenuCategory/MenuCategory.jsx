import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import PopulerCard from "../Home/PopulerCard/PopulerCard";


const MenuCategory = ({items, title, img}) => {
    return (
        <div>
        {
            title && <Cover img={img} title={title}></Cover>
        }
        <div className="grid grid-cols-2 gap-10 my-12">
           
            {

                items.map(item =><PopulerCard key={item._id} item={item}></PopulerCard>)
            }

            
        </div>
        <Link to = {`/order/${title}`}>
        <button className="btn btn-outline justify-center mx-auto mb-4 flex items-center border-0 border-b-4">Order To Your Favourite Food</button>
        </Link>
     
        </div>
    );
};

export default MenuCategory;
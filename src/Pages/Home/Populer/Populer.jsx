import { useEffect, useState } from "react";
import PopulerCard from "../PopulerCard/PopulerCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Usemenu from "../../../hook/Usemenu";



const Populer = () => {

    const [menu] = Usemenu()
    const populer = menu.filter(item =>item.category === 'Breakfast')
    
    // const [menu,setMenu] = useState([])

    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const populerItems = data.filter(item => item.category === 'Breakfast')
    //         setMenu(populerItems)
    //     })

    // })
    return (
        <div>
        <SectionTitle
        subHeading='cheack it out'
         heading='FROM OUR MENU'>

       </SectionTitle>
        <div className="grid grid-cols-2 mt-8  gap-12">
            {
                populer.map(item =><PopulerCard key={item._id} item={item}></PopulerCard>)
     
             }
        </div>
        </div>
    );
};

export default Populer;
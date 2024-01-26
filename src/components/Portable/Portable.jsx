import { useEffect, useState } from "react";
import PortCard from "../PortCard/PortCard";
import SectionTitle from "../SectionTitle/SectionTitle";


const Portable = () => {
  
    const [food,setFood]  = useState([]) 
    useEffect(()=>{
        fetch('menu.json')
        .then(res =>res.json())
         .then(data =>{
          const portItem = data.filter(port =>port.category === 'Beverage')  
          setFood(portItem)
        })
    })
    return (
        <section>
            <SectionTitle
             subHeading='should try'
             heading='CHEF RECOMMANDS'></SectionTitle>
        <div className="grid grid-cols-3 gap-5">
            {
                food.map(port =><PortCard key={port._id} port={port}></PortCard>)
            }
        </div>
        </section>
    );
};

export default Portable;
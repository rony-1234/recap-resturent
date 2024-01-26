import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Pages/Cover/Cover";
import orderImg from '../../assets/shop/banner2.jpg';
import { useState } from "react";
import Usemenu from "../../hook/Usemenu";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
 
  const {category} = useParams()
  console.log(category)
  const categories = ['dessert','breakfast','beverage','offered']
  const initialIndex = categories.indexOf(category)
  const [tabIndex,setTabIndex] = useState(initialIndex)
  const [menu] = Usemenu()


  const Dessert = menu.filter(item => item.category === "Dessert")
  const Breakfast = menu.filter(item => item.category === "Breakfast")
  const Beverage = menu.filter(item => item.category === "Beverage")
  const Offerd = menu.filter(item => item.category === "Offerd") 

  
    return (
        <div>
          <Helmet><title>Bistor Boss || Order</title></Helmet>
              <Cover img={orderImg}></Cover>

              <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
       <TabList>
        <Tab>Dessert</Tab>
         <Tab>Breakfast</Tab>
         <Tab>Beverage</Tab>
         <Tab>Offerd</Tab>
      </TabList>
        <TabPanel>
          
          <OrderTab items={Dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
       
           <OrderTab items={Breakfast}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={Beverage}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={Offerd}></OrderTab>
        </TabPanel>
        
      </Tabs>
        </div>
    );
};

export default Order;
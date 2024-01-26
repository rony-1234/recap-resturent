import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import Usemenu from "../../hook/Usemenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/salad-bg.jpg';


const Menu = () => {
    const [menu] = Usemenu()
    const Dessert = menu.filter(item => item.category === "Dessert")
    const Breakfast = menu.filter(item => item.category === "Breakfast")
    const Beverage = menu.filter(item => item.category === "Beverage")
    const Offerd = menu.filter(item => item.category === "Offerd") 


    

    return (
        <div>
            <Helmet>
                <title>Bistro || Menu</title>
            </Helmet>
            <Cover img={menuImg} title='Our Menu'></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today Offerd"></SectionTitle>
            <MenuCategory items={Offerd} img={soupImg} title='offerd'></MenuCategory> 
            <MenuCategory items={Dessert} img={dessertImg} title='dessert'></MenuCategory>
            <MenuCategory items={Beverage} img={saladImg} title='beverage'></MenuCategory>
            <MenuCategory items={Breakfast} img={soupImg} title='breakfast'></MenuCategory>
           
            
         
        </div>
    );
};

export default Menu;
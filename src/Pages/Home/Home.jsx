import React from 'react';
import Banner from './Banner';
import Category from './Category/Category';
import Extraside from '../../components/extraside/extraside';
import Populer from './Populer/Populer';
import Setter from './Setter/Setter';
import Portable from '../../components/Portable/Portable';
import Featured from '../../components/Featured/Featured';
import { Helmet } from 'react-helmet-async';
// import Testimonials from '../../Testimonials/Testimonials';
// import PopulerHeading from '../../components/PopulerHeading/PopulerHeading';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro ||Home</title>
            </Helmet>
         <Banner></Banner>
        
         <Category></Category>
         <Extraside></Extraside>
         {/* <PopulerHeading></PopulerHeading> */}
         <Populer></Populer>
         <Setter></Setter>
         <Portable></Portable>
         <Featured></Featured>
         {/* <Testimonials></Testimonials> */}
         
        </div>
    );
};

export default Home;
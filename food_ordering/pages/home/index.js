import About from '@/components/About';
import Campaigns from '@/components/Campaigns';
import MenuWrapper from '@/components/MenuWrapper';
import React from 'react'
import Carousel from "../../components/Carousel";
import Reservation from '../../components/Reservation'
import Customers from '../../components/Customers'
function Home() {
  return (
    // <React.Fragment>


    <>
    <Carousel />
    <Campaigns />
    <MenuWrapper />
    <About />
    <Reservation />
    <Customers />

  </>
      // </React.Fragment>
  );
 

  
}

export default Home
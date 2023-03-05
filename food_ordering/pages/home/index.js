import About from '@/components/About';
import Campaigns from '@/components/Campaigns';
import MenuWrapper from '@/components/MenuWrapper';
import React from 'react'
import Carousel from "../../components/Carousel";
import Reservation from '../../components/Reservation'
function Home() {
  return (
    <div>
    <Carousel />
    <Campaigns />
    <MenuWrapper />
    <About />
    <Reservation />
    
  </div>
  );
 

  
}

export default Home
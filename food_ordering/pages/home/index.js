import About from '@/components/About';
import Campaigns from '@/components/Campaigns';
import MenuWrapper from '@/components/MenuWrapper';
import React from 'react'
import Carousel from "../../components/Carousel";

function Home() {
  return (
    <div>
    <Carousel />
    <Campaigns />
    <MenuWrapper />
    <About />
  </div>
  );
 

  
}

export default Home
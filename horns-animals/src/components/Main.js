import React from 'react';
import HornedBeast from './HornedBeast';
import Peacock from '../img/peacock-90051_1920.jpg';
import Car from '../img/car-49278_1920.jpg';

function Main() {
  return (
    <>
      <HornedBeast 
        title="Peacock" 
        imgurl={Peacock} 
        desc="A flashy type of bird. A white peacock is very rare and very hard to find."
      />
      <HornedBeast 
        title="Car" 
        imgurl={Car} 
        desc="One of the worlds fastest cars."
      />
    </>
  );

}
export default Main;


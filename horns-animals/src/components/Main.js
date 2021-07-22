import React from 'react';
import HornedBeast from './HornedBeast';
import{ animalData } from '../data';

function Main() {
  return (
    <>
      {/* <HornedBeast 

        title="Peacock" 
        imgurl={Peacock} 
        desc="A flashy type of bird. A white peacock is very rare and very hard to find."
      /> */}
      {animalData.map((data, key) => {
        return (
          <div key={key}>
            <HornedBeast
              image_url={data.image_url}
              title={data.title}
              description={data.description}/>
          </div>
        );
      })}
      {/* <HornedBeast 
        title="Car" 
        imgurl={Car} 
        desc="One of the worlds fastest cars."
      /> */}
    </>
  );

}
export default Main;


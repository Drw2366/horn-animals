import React from 'react';



function HornedBeast(props) {
  return (
    <>
      <h2>
        {props.title}
      </h2>

      <img height="500px" src={props.imgurl} alt="Bird Picture" title="Bird Pic"/>;

      <p>
        {props.desc}
      </p>

    </>
      
      
      
  );
}
export default HornedBeast;

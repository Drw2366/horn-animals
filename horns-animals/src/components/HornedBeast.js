import React from 'react';



function HornedBeast({image_url, title, description}) {
  return (
    <>
      <h2>
        {title}
      </h2>

      <img height="500px" src={image_url} alt="Bird Picture" title="Bird Pic"/>;

      <p>
        {description}
      </p>

    </>
      
      
      
  );
}
export default HornedBeast;

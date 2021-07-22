import React from 'react';
// import black from '..//img/hb2.jpg';
// another way to import could also use import/from
//useState: allows us to just render one peice of code 
const {useState} = React;



function HornedBeast({image_url, title, description}) {
  //function to give the button a job
  const handleClick = () =>{
    setCount(count+1);
  };
  //userState(sets beg value)
  const [count, setCount] = useState(100); 

  return (
    <>
      <h2>{title}</h2>
      <img height="500px" src={image_url} alt="Bird Picture" title="Bird Pic"/>;
      <p>{description}</p>


      <button onClick={handleClick}> Favorite {count} </button>
    </>

    
      
      
      
  );
}
export default HornedBeast;

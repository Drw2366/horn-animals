import React from 'react';
import{ BsFillHeartFill} from 'react-icons/bs';
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
  const [count, setCount] = useState(0); 

  return (
    <>
      <h2>{title}</h2>
      <button>
        <img 
          onClick={handleClick}
          height="500px" 
          src={image_url} 
          alt="Bird Picture" 
          title="Bird Pic"
        />
        <BsFillHeartFill/>
        {/* <div height="500px" width="500px" style={{backgroundImage:`url(${image_url})`}>

        </div> */}
        {count}
      </button>
      <p>{description}</p>


      
    </>

    
      
      
      
  );
}
export default HornedBeast;

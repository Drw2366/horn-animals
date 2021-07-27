import React from 'react';
import{ BsFillHeartFill} from 'react-icons/bs';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col} from 'react-bootstrap';
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
      <Container>
        <Row>
          <Col xs={12}>
            <Button className='bg-transparent border-0'>
              <Image
                src={image_url}
                atl={title} 
                onClick={handleClick}
                className='img-fluid'
              />
            </Button>
          </Col>
          //
          <Col xs={12}>
            <Col><BsFillHeartFill/></Col>
            <Col>{count}</Col>
          </Col>
        </Row>
        <Row>
          <Col ><h2 xs={12}>{title}</h2></Col>
          <Col><p>{description}</p></Col>
        </Row>

      </Container>
    </>
    
      
      
      
  );
}
export default HornedBeast;

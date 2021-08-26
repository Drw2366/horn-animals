import React from 'react';
import HornedBeast from './HornedBeast';
import Peacock from '../img/peacock-90051_1920.jpg';
import Car from '../img/car-49278_1920.jpg';

function Main({animalData}) {
  let filterArray = [1, 2, 3, 100];
  const [selectedHorns, setSelectedHorns] = useState(0);
  return (
    <>
      <Container>
        <Row>
              
          <Col xs={12}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="Filter Dropdown">
                Filter Beast by Horn Amount
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {filterArray.map(number => (
                  <Dropdown.Item
                    onSelect={(eventKey)=> setSelectedHorns(parseInt(eventKey))}
                    eventKey={number}>
                    {number} Horn(s)
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {animalData.filter(data=> data.horns === selectedHorns
          ).map((filteredData, key) => {
            return (
              <Col xs={12} md={6} lg={4}>
                <div key={key}>
                  <HornedBeast
                    key={key}
                    image_url={filteredData.image_url}
                    title={filteredData.title}
                    description={filteredData.description}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Main;








// function Main() {
//   return (
//     <>
//       <HornedBeast 
//         title="Peacock" 
//         imgurl={Peacock} 
//         desc="A flashy type of bird. A white peacock is very rare and very hard to find."
//       />
//       <HornedBeast 
//         title="Car" 
//         imgurl={Car} 
//         desc="One of the worlds fastest cars."
//       />
//     </>
//   );

// }
// export default Main;


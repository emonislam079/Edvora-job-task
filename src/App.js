import {Col, Container, Dropdown, Row } from 'react-bootstrap';
import './App.css';
import Products from './Component/Products/Products';

function App() {
  return (
    <Container className='App'>
  <Row>
  <Row>
    <Col xs={12} md={3} >
      <div className='filter'>
          <h1 className='filter-left'>Filters</h1>
          <hr></hr>
        <div>
        <Dropdown className='text-center'>
    <Dropdown.Toggle className='drop' id="dropdown-button-dark-example1">
      Products
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="#/action-1" active>
        Action
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown className='text-center'>
    <Dropdown.Toggle className='drop' id="dropdown-button-dark-example1">
      State
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="#/action-1" active>
        Action
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown className='text-center'>
    <Dropdown.Toggle className='drop' id="dropdown-button-dark-example1">
      City
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="#/action-1" active>
        Action
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</div>
</div>
    </Col>
    <Col xs={12} md={9} className="Product-container" >
      <h1 className='title'>Edvora</h1>
      <h1 className='products'>Products</h1>
      <h1 className='productName'>Product Name</h1>
      <hr className='hr'></hr>
      <Products></Products>
      <h1 className='productName2'>Product Name</h1>
      <hr className='hr'></hr>
      <Products></Products>
    </Col>
  </Row>
  </Row>
  
</Container>
  );
}

export default App;

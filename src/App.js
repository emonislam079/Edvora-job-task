import { useEffect, useState } from 'react';
import {Carousel, Col, Container, Dropdown, Row } from 'react-bootstrap';
import './App.css';

function App() {
  const [product , setProduct]= useState([]);
    useEffect(()=>{
        fetch('https://assessment-edvora.herokuapp.com/')
        .then(res =>res.json())
        .then(data => setProduct(data))
    },[]);
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
            <Dropdown.Item href="#apple" active>
              Apple
            </Dropdown.Item>
            <Dropdown.Item href="#alibaba">Alibaba</Dropdown.Item>
            
            
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
            
          </Dropdown.Menu>
        </Dropdown>
      </div>
      </div>
          </Col>
          <Col xs={12} md={9} className="Product-container" >
            <h1 className='title'>Edvora</h1>
            <h1 className='products'>Products</h1>
            <h1 id="apple" className='productName'>Apple</h1>
            <hr className='hr'></hr>
            <div>
                  <Carousel>
                          <Carousel.Item>
                          <Row xs={1} md={3} className="g-4 Product-Container">
                  {
                      product.filter(product=> product.brand_name = "Apple").slice(0,3).map(product =><div
                      product ={product}
                      >

                        <div className='Single-product'>
                        <Container>
                                  <Row>
                                    <Col md={5}><img src={product.image} alt="" height='70px' width='70px'/>
                                    <p className='location'>Location: {product.address.state}</p>
                                    </Col>
                                    <Col md={7}>
                                    <h1 className='ProductName'>{product.product_name}</h1>
                                    <h1 className='brandName'>{product.brand_name}</h1>
                                    <h1 className='price'><span>$ </span>{product.price}</h1>
                                    <h1 className='Date'><span id='date'>Date: </span>{product.date.slice(0,10)}</h1>               
                                    </Col>
                                    <p className='discription'>Discription: {product.discription}</p>
                                  </Row>
                                </Container>
                        </div>
              </div>)
                  }
  </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Row xs={1} md={3} className="g-4 Product-Container">
            {
                product.filter(product=> product.brand_name = "Apple").slice(4,7).map(product =><div
                product ={product}
                >

                  <div className='Single-product'>
                  <Container>
                            <Row>
                              <Col md={5}><img src={product.image} alt="" height='70px' width='70px'/>
                              <p className='location'>Location: {product.address.state}</p>
                              </Col>
                              <Col md={7}>
                              <h1 className='ProductName'>{product.product_name}</h1>
                              <h1 className='brandName'>{product.brand_name}</h1>
                              <h1 className='price'><span>$ </span>{product.price}</h1>
                              <h1 className='Date'><span id='date'>Date: </span>{product.date.slice(0,10)}</h1>               
                              </Col>
                              <p className='discription'>Discription: {product.discription}</p>
                            </Row>
                          </Container>
                  </div>
        </div>)
            }
  
    
</Row>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Row xs={1} md={3} className="g-4 Product-Container">
            {
                product.filter(product=> product.brand_name = "Apple").slice(8,11).map(product =><div
                product ={product}
                >

                  <div className='Single-product'>
                  <Container>
                            <Row>
                              <Col md={5}><img src={product.image} alt="" height='70px' width='70px'/>
                              <p className='location'>Location: {product.address.state}</p>
                              </Col>
                              <Col md={7}>
                              <h1 className='ProductName'>{product.product_name}</h1>
                              <h1 className='brandName'>{product.brand_name}</h1>
                              <h1 className='price'><span>$ </span>{product.price}</h1>
                              <h1 className='Date'><span id='date'>Date: </span>{product.date.slice(0,10)}</h1>               
                              </Col>
                              <p className='discription'>Discription: {product.discription}</p>
                            </Row>
                          </Container>
                  </div>
        </div>)
            }
  
    
</Row>
                    </Carousel.Item>
                    </Carousel>
            
        </div>
      <h1 id="alibaba" className='productName2'>Alibaba</h1>
      <hr className='hr'></hr>
      <div>
            <Carousel>
                    <Carousel.Item>
                    <Row xs={1} md={3} className="g-4 Product-Container">
            {
                product.filter(product=> product.brand_name = "Alibaba").slice(0,3).map(product =><div
                product ={product}
                >

                  <div className='Single-product'>
                  <Container>
                            <Row>
                              <Col md={5}><img src={product.image} alt="" height='70px' width='70px'/>
                              <p className='location'>Location: {product.address.state}</p>
                              </Col>
                              <Col md={7}>
                              <h1 className='ProductName'>{product.product_name}</h1>
                              <h1 className='brandName'>{product.brand_name}</h1>
                              <h1 className='price'><span>$ </span>{product.price}</h1>
                              <h1 className='Date'><span id='date'>Date: </span>{product.date.slice(0,10)}</h1>               
                              </Col>
                              <p className='discription'>Discription: {product.discription}</p>
                            </Row>
                          </Container>
                  </div>
        </div>)
            }
  
    
</Row>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Row xs={1} md={3} className="g-4 Product-Container">
            {
                product.filter(product=> product.brand_name = "Alibaba").slice(4,7).map(product =><div
                product ={product}
                >

                  <div className='Single-product'>
                  <Container>
                            <Row>
                              <Col md={5}><img src={product.image} alt="" height='70px' width='70px'/>
                              <p className='location'>Location: {product.address.state}</p>
                              </Col>
                              <Col md={7}>
                              <h1 className='ProductName'>{product.product_name}</h1>
                              <h1 className='brandName'>{product.brand_name}</h1>
                              <h1 className='price'><span>$ </span>{product.price}</h1>
                              <h1 className='Date'><span id='date'>Date: </span>{product.date.slice(0,10)}</h1>               
                              </Col>
                              <p className='discription'>Discription: {product.discription}</p>
                            </Row>
                          </Container>
                  </div>
        </div>)
            }
  
    
</Row>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Row xs={1} md={3} className="g-4 Product-Container">
            {
                product.filter(product=> product.brand_name = "Alibaba").slice(8,11).map(product =><div
                product ={product}
                >

                  <div className='Single-product'>
                  <Container>
                            <Row>
                              <Col md={5}><img src={product.image} alt="" height='70px' width='70px'/>
                              <p className='location'>Location: {product.address.state}</p>
                              </Col>
                              <Col md={7}>
                              <h1 className='ProductName'>{product.product_name}</h1>
                              <h1 className='brandName'>{product.brand_name}</h1>
                              <h1 className='price'><span>$ </span>{product.price}</h1>
                              <h1 className='Date'><span id='date'>Date: </span>{product.date.slice(0,10)}</h1>               
                              </Col>
                              <p className='discription'>Discription: {product.discription}</p>
                            </Row>
                          </Container>
                  </div>
        </div>)
            }
  
    
</Row>
                    </Carousel.Item>
                    </Carousel>
            
        </div>
    </Col>
  </Row>
  </Row>
</Container>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Product.css"
const Products = () => {
    const [product , setProduct]= useState([]);
    useEffect(()=>{
        fetch('https://assessment-edvora.herokuapp.com/')
        .then(res =>res.json())
        .then(data => setProduct(data))
    },[]);

    return (
        <div>
            <Row xs={1} md={3} className="g-4 Product-Container">
            {
                product.slice(0,3).map (product =><div
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
        </div>
    );
};

export default Products;
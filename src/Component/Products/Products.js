import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Products = () => {
    const [product , setProduct]= useState([]);
    useEffect(()=>{
        fetch('https://assessment-edvora.herokuapp.com/')
        .then(res =>res.json())
        .then(data => setProduct(data))
    },[]);

    return (
        <div>
            <Row xs={1} md={4} className="g-4">
            {
                product.map(product =><div
                product ={product}
                >
    <Col>
      <Card>
        <Card.Img variant="top" src={product.image} width='70px' height='70px' />
        <Card.Body>
          <Card.Title>{product.product_name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </div>)
            }
  
    
</Row>
        </div>
    );
};

export default Products;
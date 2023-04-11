import React, { useEffect, useState } from 'react';

import { Container,Row,Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  let {id} = useParams();

  const [ product,setProduct ]=useState(null);

  const getProductDetail = async()=>{

    let url=`https://my-json-server.typicode.com/kimyunong/react-shop2/products/${id}`;
    let response= await fetch(url);
    let data = await response.json();

    setProduct(data);

  }

  useEffect (()=>{

    getProductDetail();

  },[]);

  return (

    <Container>
      <Row>
        <Col>
        <div className='product-img'>
          <img src={product?.img}/>
        </div>
        </Col>

        <Col>
        <div className='Detail-new'>{product?.new === true? "new" :""}</div>
        <div className='Detail-title'>{product?.title}</div>
        <div className='Detail-price'>{product?.price}원</div>
        <div>{product?.choice === true? "Conscious Choice" :""}</div>

        <select className='Detail-size'>
          {product?.size.map((item)=>(<option>{item}</option>))}
          
        </select>

        <div className='Detail-button'>
          button
        </div>
        </Col>
      </Row>
    </Container>

  )
}

export default ProductDetail

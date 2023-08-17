import React, { useEffect,useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

const [ ProductList, setProductList ] = useState([]);

const [ search, setSearch ] = useSearchParams();

const getProduct = async()=>{

  let searchQuery=search.get('q') || "";

  let url = `https://my-json-server.typicode.com/kimyunong/react-shop2/products/?q=${searchQuery}`;
  let response = await fetch(url);
  let data = await response.json();

  setProductList(data);

  console.log("데이터",searchQuery);

}

useEffect(()=>{
  getProduct();
},[search])

  return (
    <div>
      <Container>
        <Row>
            {ProductList.map((item)=>(
              <Col lg={3}>
              <ProductCard item={item}/>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll

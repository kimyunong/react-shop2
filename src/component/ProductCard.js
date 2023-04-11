import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {

  const navigate = useNavigate();

  const goProductDetail = ()=>{
    navigate(`/product/${item.id}`)
  }



  return (
    <Card onClick={goProductDetail}>
      <Card.Img variant="top" src={item?.img} />

      <Card.Body>
        <Card.Title class="text-danger">{item?.new===true? "new" : ""}</Card.Title>
        <Card.Text class="card-title">{item?.title}</Card.Text>
        <Card.Text class="card-title">{item?.price}원</Card.Text>
        <Card.Text>{item?.choice===true? "Conscious choice" : ""}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

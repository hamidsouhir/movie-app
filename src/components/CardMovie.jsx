import React from 'react'
import {  Card } from 'react-bootstrap'
import Rate from './Rate'


const CardMovie = ({el}) => {
    console.log(el)
  return (
    <div  >   
    <Card style={{ width: '20rem',backgroundColor:'#3c3f46',borderRadius:'3px',
     boxShadow:'3px 3px 5px ' }}>
  <Card.Img variant="top" src={el?.posterUrl} alt="" width={"10%"} />
  <Card.Body>
    <Card.Title>{el?.title}</Card.Title>
    <Card.Text>
    {el?.description}
    </Card.Text>
    <span variant="primary"><Rate rating={el?.rating}/></span>
  </Card.Body>
</Card>
     
     
        
    </div>
  )
}

export default CardMovie

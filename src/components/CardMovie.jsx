import React from 'react'
import {  Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rate from './Rate'


const CardMovie = ({el}) => {
    console.log(el)
  return (
    <div  className='movie-card'> 
    
    {/* <Link to="/Details">Details</Link>  */}
    <Link to={`/${el.title}`}>
    <Card style={{ width: '20rem',backgroundColor:'#3c3f46',borderRadius:'3px',
     boxShadow:'3px 3px 5px ' }}>
       <div> 
  <Card.Img className='img' variant="top" src={el?.posterUrl} alt="" width={"10%"} height="400px" />
  </div>
  <Card.Body className='info'>
    <Card.Title>{el?.title}</Card.Title>
    <Card.Text>
    {el?.genre}
    </Card.Text>
    <span variant="primary"><Rate rating={el?.rating}/></span>
  </Card.Body>
</Card>
</Link>
  
        
    </div>
  )
}

export default CardMovie

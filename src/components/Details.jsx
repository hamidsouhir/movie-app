import React from 'react'
import {  useParams } from 'react-router-dom'

const Details = ({Movies,el}) => {
const Params = useParams();
console.log(Params);
const mov = Movies.find(el => el?.title ===Params?.title);
console.log(mov)

  return (
    <div className='detail'>
       
   <iframe src={mov.trailer} frameborder="0" title='youtube video player'width="560" height="315">
        </iframe>  
        <div className='descp'>
          <h1>{mov.title}</h1>
        <p>{mov.description}</p>
        {/* <Link to={`/${el.title}`}>
        <button className='btnTrailer'>Trailer Movie</button>
        </Link> */}
        </div>
        
        {/* <Link to="/">List of Movie</Link> */}
    </div>
  )
}

export default Details
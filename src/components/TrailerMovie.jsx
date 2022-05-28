import React from 'react'
import { useParams } from 'react-router-dom'

const TrailerMovie = ({Movies}) => {
   const Params =useParams();
   console.log(Params)
  return (
    <div>Trailer</div>
  )
}

export default TrailerMovie
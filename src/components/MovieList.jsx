import React from 'react'

import CardMovie from './CardMovie'


const MovieList = ({movies}) => {
  console.log(movies)
  return (
    <div className='list' style={{display:"flex",
    justifyContent:"space-around",
    flexWrap:"wrap",
     alignItems:"center",
     padding:"50px"}}>

 
        {movies.map(el=>
      
          <CardMovie el={el} key={el.id} />
          
       )}
       {/* <Link to={`/${el.title}`}>TRAILER</Link> */}
    </div>
  )
}

export default MovieList
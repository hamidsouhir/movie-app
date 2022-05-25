import React from 'react'
import CardMovie from './CardMovie'


const MovieList = ({movies}) => {
  console.log(movies)
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        {movies.map(el=>
      
          <CardMovie el={el} key={el.id} />
       )}
       
    </div>
  )
}

export default MovieList
import React from 'react'

const Rate = ({rating,handleRating}) => {
 function stars(rating){
    let newRate = [];
    for (let i=1; i<=5;i++){
    
     if(i<=rating){
       newRate.push(<span onClick={()=>handleRating(i)} style={{color:"gold",cursor:"pointer"}} >★</span>)
      }
       else
       newRate.push(<span onClick={()=>handleRating(i)} style={{color:'black',cursor:"pointer"}} >★</span>)
     }
     return newRate   
    }
  
  return (
    <div>
    {stars(rating)}


        
        
    </div>
  )
}
Rate.defaultProps={handleRating:()=>{} }
export default Rate
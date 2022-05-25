

import { useState } from 'react';
import './App.css';

import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/Navb';
import CardMovie from './components/CardMovie';
import AddMovie from './components/AddMovie';



function App() {
  let data = [
    {
      id : Math.random(),
      title : "The Batman",
      description:"action,violence,Drama",
      posterUrl:'https://i.egycdn.com/pic/RHNhSUNlY212bXBZWXZtRW12RWNtYnh3Zk52bVRFUA.jpg',
      rating : 5,
    },
     {
      id : Math.random(),
     title : "BABY DRIVER",
     description:"action,violence",
     posterUrl:'https://i0.wp.com/views.fr/wp-content/uploads/2020/04/81yNUXs701L._AC_SL1392_.jpg?resize=940%2C1392&ssl=1',
     rating : 4,
   },
   {
    id : Math.random(),
     title : "The Northman",
     description:"action , Adventure,Drama",
     posterUrl:'https://i.egycdn.com/pic/WmFwZndlY212bW12Y3ZObXZjdmNFY21HTm1tYndUZk5n.jpg',
     rating : 3,
   },
   {
    id : Math.random(),
     title : "Memory",
     description:"action , Adventure,Drama",
     posterUrl:'https://i.egycdn.com/pic/RHNhSUNlY212bXZtdm1tbVR2bXZFY212UHZjdmNtWWptbXZj.jpg',
     rating : 2,
   }
  ]
 const [Movies, setMovies] = useState(data)
  const[text,setText] = useState('')
  const [rating, setRating] = useState(1)

  const handleAdd=(newList)=>setMovies([...Movies,newList])

  const handelChange=(e) =>{
    setText(e.target.value)
  }
  const handleRating=(x)=>setRating(x)
 
  return (
    <div className="App" >
      <Navb rating={rating} text={text} handelChange={handelChange} handleRating={handleRating}/>
     <MovieList movies={Movies.filter((el)=>el?.title.toLowerCase().includes(text.toLowerCase())
      && el?.rating>= rating)} /> 
     {/* <CardMovie rating = {data.rating}/> */}
    <AddMovie handleAdd={handleAdd}/>
    </div>
  );
}

export default App;

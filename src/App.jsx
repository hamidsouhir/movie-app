

import { useState } from 'react';
import './App.css';

import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './components/Navb';

import AddMovie from './components/AddMovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Details from './components/Details';

// import TrailerMovie from './components/TrailerMovie';



function App() {
  let data = [
    {
      id : Math.random(),
      title : "The Batman",
      description:"The film sees Batman, who has been fighting crime in Gotham City for two years, uncover corruption while pursuing the Riddler (Dano), a serial killer who targets Gotham's elite.",
      posterUrl:'https://i.egycdn.com/pic/RHNhSUNlY212bXBZWXZtRW12RWNtYnh3Zk52bVRFUA.jpg',
      genre : "action,violence,Drama",
      rating : 5,
      trailer:"https://www.youtube.com/watch?v=zL4LFSbFPcw"
    },
     {
      id : Math.random(),
     title : "BABY DRIVER",
     description:"After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail. After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
     posterUrl:'https://i0.wp.com/views.fr/wp-content/uploads/2020/04/81yNUXs701L._AC_SL1392_.jpg?resize=940%2C1392&ssl=1',
    genre :"action,violence",
     rating : 4,
     trailer :"https://www.youtube.com/embed/zTvJJnoWIPk" 
   },
   {
    id : Math.random(),
     title : "The Northman",
     description:"It's the tale of Amleth (Alexander Skarsgård), a hulking, enraged Viking warrior prince who's seeking retribution for a lost kingdom in Scandinavia.",
     posterUrl:'https://i.egycdn.com/pic/WmFwZndlY212bW12Y3ZObXZjdmNFY21HTm1tYndUZk5n.jpg',
     genre: "action ,History",
     rating : 3,
     trailer:"https://www.youtube.com/embed/E7wNR9sHQ2g"
     
   },
   {
    id : Math.random(),
     title : "Memory",
     description:"MEMORY follows Alex Lewis (Liam Neeson), an expert assassin with a reputation for discreet precision. Caught in a moral quagmire, Alex refuses to complete a job that violates his code and must quickly hunt down and kill the people who hired him before they and FBI agent Vincent Serra (Guy Pearce) find him first.",
     posterUrl:'https://i.egycdn.com/pic/RHNhSUNlY212bXZtdm1tbVR2bXZFY212UHZjdmNtWWptbXZj.jpg',
     genre: "action , Adventure,Drama",
     rating : 2,
     trailer:"https://www.youtube.com/embed/yGw8yw6Mso8" 
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
      <BrowserRouter>
      <Routes> 
        <Route path="/MovieList" element = {<MovieList movies={Movies.filter((el)=>el?.title.toLowerCase().includes(text.toLowerCase())
      && el?.rating>= rating)} /> } />
        {/* <Route path="/CardMovie" element={CardMovie}/> */}
{/* <CardMovie rating = {data.rating}/> */}
       {/* <Route path ="/Details" element = {<Details movies={Movies}/> } /> */}
       <Route path ="/:title"  element = {<Details Movies={Movies} />}/>
       {/* <Route path ="/:title"  element = {<TrailerMovie Movies={Movies} />}/> */}

       
      </Routes>
      
      </BrowserRouter>
      <AddMovie handleAdd={handleAdd}/>
    </div>
  );
}

export default App;

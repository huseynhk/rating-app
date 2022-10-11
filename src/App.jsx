import { useState } from 'react';
import './App.css';
import Rating from './components/Rating';
import Thanks from './components/Thanks';

function App() {

  const [showThanks , setShowThanks]=useState(false)

  const [rating , setRating]=useState(null) 

  return (
    <div className="App">

    {showThanks ? <Thanks rating={rating}/> : <Rating rating={rating} setRating={setRating} setShowThanks={setShowThanks}/>}

    </div>

  );
}

export default App;

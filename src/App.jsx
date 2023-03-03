import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
const API_URL = `https://v2.jokeapi.dev/joke/Programming?amount=10`;

function App() {
  const [joke, setJoke] = useState('');
  
  const generateJoke = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.jokes.joke));
  }
  useEffect(()=> {
    generateJoke()
  }, [])

  return (
    <div className="box">
<h1>Jokes</h1>
<p> {joke}</p>
<button onClick ={generateJoke}>Get new joke </button> 
   </div>
  );
}

export default App;

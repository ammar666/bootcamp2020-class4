import React, {useState} from 'react';
import Child from './child.js';
import './App.css';

function App() {
  let [count, setcount] = useState(0)
  let [morning, setmorning] = useState(true)
  return (
    <div className= {`box ${morning ? 'dayLight' : ''}`}>
      <h1>Hello world</h1>
      <h2>Day Time = {morning ? 'Morning':'Night'}
      </h2>
      <Child cityname = "Pakistan" />
      <h1>the counter value is : {count}</h1>
      <button onClick = {()=> setcount(++count)} >counter setting</button>
      <button onClick = {()=> setmorning(!morning)}>Update day</button>
    </div>
  );
}

export default App;

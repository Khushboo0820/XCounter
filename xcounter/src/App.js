import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
     
      <h1 style={{ textAlign: "center" }}>Counter App</h1>
      <p style={{ textAlign: "center" }}>Count: {count}</p>
      
      <div style={{ textAlign: "center" }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;

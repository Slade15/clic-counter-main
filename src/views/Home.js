import React from 'react';

function Home({onIncrement,onDecrement,counter}) {
  return (
    <div>
      <h1>Counter Value : {counter}</h1>      
      <button onClick={onIncrement}> INC </button>  
      <button onClick={onDecrement} > DEC </button>        
    </div>
  );
};

export default Home;

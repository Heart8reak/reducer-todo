import React, { useState, useReducer } from 'react';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState();
  console.log(state);

  const handleChanges = e => {
    e.preventDefault();
    setInput('');
  };

  return (
    <div className="App">
      <header className="App-header">
        {state.map(todo => (
          <h1 key={todo.id}>{todo.name}</h1>
        ))}
      </header>
    </div>
  );
}

export default App;

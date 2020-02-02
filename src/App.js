import React, { useReducer } from 'react';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const addTodo = input => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    };

    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };
  const handleComplete = id => {
    dispatch({ type: 'COMPLETED_TODO', payload: id });
  };

  const clearComplete = id => {
    dispatch({ type: 'CLEAR_COMPLETED', payload: id });
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

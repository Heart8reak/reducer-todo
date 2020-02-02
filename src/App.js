import React, { useReducer } from 'react';

import './App.css';

import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

import { initialState, reducer } from './reducers/todoReducer';

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
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm addTodo={addTodo} />
        <TodoList state={state} handleComplete={handleComplete} />
        <button
          onClick={e => {
            e.preventDefault();
            clearComplete();
          }}
        >
          Clear Todo
        </button>
      </header>
    </div>
  );
}

export default App;

import React, { useReducer } from 'react';
import Button from '@material-ui/core/Button';

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

  const clearCompleted = id => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm addTodo={addTodo} />
        <br />

        <Button
          type="submit"
          variant="outlined"
          color="secondary"
          onClick={e => {
            e.preventDefault();
            clearCompleted();
          }}
        >
          Clear
        </Button>
        <TodoList state={state} handleComplete={handleComplete} />
      </header>
    </div>
  );
}

export default App;

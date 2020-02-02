import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddSharpIcon from '@material-ui/icons/AddSharp';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
      color: 'green'
    }
  }
}));

export function TodoForm(props) {
  const [form, setForm] = useState('');
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      onSubmit={e => {
        e.preventDefault();
        props.addTodo(form);
        setForm('');
      }}
    >
      <TextField
        name="todo"
        label="Things Todo"
        variant="filled"
        value={form}
        onChange={e => {
          setForm(e.target.value);
        }}
      />
      {/* <input
        name="todo"
        placeholder="Things Todo"
        value={form}
        onChange={e => {
          setForm(e.target.value);
        }}
      /> */}
      <Button type="submit" variant="container">
        <AddSharpIcon />
      </Button>
    </form>
  );
}

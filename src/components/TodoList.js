import React from 'react';
import { Todo } from './Todo';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500
    // backgroundColor: theme.palette.background.paper
  }
}));

export function TodoList(props) {
  const classes = useStyles();
  return (
    <div>
      {props.state.map(item => {
        return (
          <List className={classes.root}>
            <ListItem button>
              <ListItemText id={''} />
              <Todo
                item={item}
                key={item.id}
                handleComplete={props.handleComplete}
              />
            </ListItem>
          </List>
        );
      })}
    </div>
  );
}

import React from 'react';
import { Todo } from './Todo';

import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

import GridList from '@material-ui/core/GridList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: 400,
    height: 250
    // transform: 'translateZ(0)'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'white'
  }
}));

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 500
//     // backgroundColor: theme.palette.background.paper
//   }
// }));

export function TodoList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={100} spacing={0}>
        {props.state.map(item => {
          return (
            <ListItem button>
              <Todo
                item={item}
                key={item.id}
                handleComplete={props.handleComplete}
              />
            </ListItem>
          );
        })}
      </GridList>
    </div>
  );

  //   return (
  //     <div>
  //       {props.state.map(item => {
  //         console.log(props.state);
  //         return (
  //           <List key={item.id} className={classes.root}>
  //             <ListItem button>
  //               <ListItemText />
  //               <Todo
  //                 item={item}
  //                 key={item.id}
  //                 handleComplete={props.handleComplete}
  //               />
  //             </ListItem>
  //           </List>
  //         );
  //       })}
  //     </div>
  //   );
}

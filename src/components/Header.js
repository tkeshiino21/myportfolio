import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TabBar from './TabBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

    AppBar: {
      color: '#F8F8F7',
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },

  title: {
    flexGrow: 1,
    textAlign : "Left",
    color: "#659D89",
    fontFamily: "Helvetica Neue",
    fontWeight: "400",
    padding: theme.spacing(12),
  },

  menu: { 
    color: "#333333",
    fontFamily: "Arial",
    fontWeight: "400",
    padding: theme.spacing(2)
  },

}));


export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Toolbar color="primary" >
          <Typography variant="h7" className={classes.title}>
            I'm George.
          </Typography>

        <TabBar/>

        </Toolbar>
      
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import bloglogo from './images/bloglogo.png';
import profile from './images/profile.jpg';
import code from './images/code.jpg';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 90,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
  none: {
    display: 'none',
  }

}));

export default function AllContents() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (

    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>

        <Grid item xs={4}>
          <Paper className={classes.none}>xs=4</Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <img src={bloglogo} alt="Logo" />
          <br />
          <br />
          </Paper>
          <Typography variant="h6">
            Blog contents 
          </Typography>
          <Typography style={{ 
            color: "#686868",
            fontFamily: "Roboto Mono for Powerline",
          }}      
          >
            Qiita
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <img src={profile} alt="Logo" />
          </Paper>
          <Typography variant="h6" >
            Profile
          </Typography>
          <Typography style={{ 
            color: "#686868",
            fontFamily: "Roboto Mono for Powerline",
          }}      
          >
            Self-introduce
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
          <img src={code} alt="Logo" />
          </Paper>
          <Typography variant="h6" >
            ArtWorks and Resourse
          </Typography>
          <Typography style={{ 
            color: "#686868",
            fontFamily: "Roboto Mono for Powerline",
          }}      
          >
            Material-ui
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.none}>xs=4</Paper>
        </Grid>
        
        </Grid>
      </Grid>
    </Grid>

  );
}
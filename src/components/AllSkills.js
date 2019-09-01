import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import html from './images/html.png';
import js from './images/js.png';
import react from './images/react.png';

//console.log(html);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 320,
    width: 400,
  },
  control: {
    padding: theme.spacing(2),
  },
  Card: {
    maxwidth: 800,
  }
}));

export default function AllSkills() {
  const [spacing] = React.useState(2);
  const classes = useStyles();

  return (

    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>

        <Grid item justify="center">
          <Card className={classes.paper}>
          <CardActionArea><CardMedia><CardContent>
          <img src={html} alt="Logo" />
            <Typography>
              HTML<br />
              習得度：★★★
            </Typography>
          </CardContent></CardMedia></CardActionArea>
          </Card>
        </Grid>

        <Grid item justify="center">
          <Card className={classes.paper}>
          <CardActionArea><CardMedia><CardContent>
          <img src={js} alt="Logo" />
            <Typography>
              Javascript<br />
              習得度：★★★
            </Typography>
          </CardContent></CardMedia></CardActionArea>
          </Card>
        </Grid>

        <Grid item justify="center">
          <Card className={classes.paper}>
          <CardActionArea><CardMedia><CardContent>
          <img src={react} alt="Logo" />
            <Typography>
              <br />
              React.js<br />
              習得度：★★★
            </Typography>
          </CardContent></CardMedia></CardActionArea>
          </Card>
        </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}
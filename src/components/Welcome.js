import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  paper: {
    margin: theme.spacing(1),
    padding: 20,
  },
}));

export default function Welcome() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  function handleChange() {
    setChecked(prev => !prev);
  }

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <div className={classes.container}>
        <Grow in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <h1>Welcome to My work!</h1>
          </Paper>
        </Grow>
      </div>
    </div>
  );
}

import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function HelloHeader() {

    return(
    <Fragment>
      <CssBaseline />
      <Container fixed styles={useStyles}>

        <Typography variant="h2" component="div"
          style={{ 
            textAlign : "Left",
            color: "#659D89",
            fontFamily: "Helvetica Neue",
            fontWeight: "400",
            marginTop: 100,
          }}>
          Hi, I'm George.
        </Typography>

        <Typography variant="h2" component="div" 
          style={{ 
            textAlign : "Left",
            color: "#333333",
            fontFamily: "Arial",
            fontWeight: "400",
            lineHeight: 1.5,
            marginTop: 20,
          }}>
          Web Frontend Engineer <br />
          Welcome to my portfolio!
        </Typography>

        <Typography variant="h5" component="div" 
          style={{ 
            textAlign : "Left",
            color: "#333333",
            fontFamily: "Helvetica Neue",
            fontWeight: "500",
            marginTop: 300,
          }}>
          ↓Browse skills and artworks
        </Typography>

      </Container>
    </Fragment>
    );
  }

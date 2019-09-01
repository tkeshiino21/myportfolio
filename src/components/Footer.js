import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
        <Typography component="div" 
          style={{
            backgroundColor: '#F8F8F7',
            height: '5vh' }}
        >
          created by Takeshi Inoue
        </Typography>
        </Container>
      </div>
    )
  }
}

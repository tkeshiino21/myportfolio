import React, { Component ,Fragment } from 'react';
import ProfileCard from './ProfileCard'

export default class Profile extends Component {
  render (){
  return (
    <Fragment>
      <h1>Hello,from Profile</h1>
      <ProfileCard/>
    </Fragment>
  );
}
}

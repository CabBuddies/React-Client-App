import React, { Component } from 'react';
 
import userState from '../../../../utils/UserState';
import { Redirect } from 'react-router';

class About extends Component {
 
  render() {
    userState.unsetUser();
    return (
      <Redirect push to="/"/>
    );
  }
}
 
export default About;
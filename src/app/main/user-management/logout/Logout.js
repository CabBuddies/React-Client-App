import React, { Component } from 'react';
 
import userState from '../../../../utils/UserState';

class About extends Component {
 
  render() {
    userState.unsetUser();
    return (
      <h3>
        Logout: CabBuddies
      </h3>
    );
  }
}
 
export default About;
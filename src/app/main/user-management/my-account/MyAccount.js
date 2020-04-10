import React, { Component } from 'react';
import userState from '../../../../utils/UserState';
 
import UserManagement from 'api-library-user-management';
import JSONPrint from '../../../commons/json/JSONPrint';

class MyAccount extends Component {
 
    state = {
        result:{}
    }

  async componentWillMount(){
    console.log('MyAccount componentDidMount')
    let result = await (await UserManagement.decodeUser(userState.getUser())).json();
    console.log(result);
    this.setState({result});
  }

  render() {
    console.log('MyAccount rendered')
    return (
      <JSONPrint data={this.state.result}/>
    );
  }
}
 
export default MyAccount;
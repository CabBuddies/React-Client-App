import React, { Component } from 'react';
import userState from '../../../../utils/UserState';
 
import UserManagement from 'api-library-user-management';

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
      <h3>
        MyAccount :<pre>{JSON.stringify(this.state.result, undefined, 2)}</pre>
      </h3>
    );
  }
}
 
export default MyAccount;
import React, { Component } from 'react';
 
import Form from '../../../commons/form/Form';

import userState from '../../../../utils/UserState';

import UserManagement from 'api-library-user-management';
import FirebaseAuth from '../firebase/FirebaseAuth';
import { useHistory } from "react-router-dom";

class Login extends Component {

  
  async submitForm(data){
    console.log(UserManagement);
    let result = await (await UserManagement.loginUser(data.email,data.password)).json();
    console.log(result);
    userState.setUser(result.accessToken);
    useHistory().push('/my-account')
  }

  render() {
    let formSchema = {
        onSubmit:this.submitForm,
        fields:[
            {
                name:'email',
                required:true
            },
            {
                name:'password',
                required:true
            }
        ]
    };
    console.log(formSchema);
    return (
      <div>
        <Form formSchema={formSchema}/>
        <FirebaseAuth />
      </div>
    );
  }
}
 
export default Login;
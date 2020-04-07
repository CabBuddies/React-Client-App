import React, { Component } from 'react';
 
import Form from '../../../commons/form/Form';

import userState from '../../../../utils/UserState';

import UserManagement from 'api-library-user-management';

class Register extends Component {
 
  async submitForm(data){
    console.log(UserManagement);
    let result = await (
        await UserManagement.registerUser(
                data.email,
                data.password,
                data.firstName,
                data.lastName,
                data.phoneNumber)
            ).json();
    console.log(result);
    userState.setUser(result.accessToken);
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
            },
            {
                name:'firstName'
            },
            {
                name:'lastName'
            },
            {
                name:'phoneNumber'
            }
        ]
    };
    console.log(formSchema);
    return (
      <Form formSchema={formSchema}/>
    );
  }
}
 
export default Register;
import React, { Component } from 'react';
 
import Form from '../../../commons/form/Form';

import userState from '../../../../utils/UserState';

import UserManagement from 'api-library-user-management';
import FirebaseAuth from '../firebase/FirebaseAuth';

import { useHistory } from "react-router-dom";

class Register extends Component {

  async submitForm(data){
    console.log(UserManagement);
    //alert(JSON.stringify(data));
    let result = await (
        await UserManagement.registerUser(
                data.email,
                data.password,
                data.firstName,
                data.lastName,
                data.phoneNumber,
                data.registrationType)
            ).json();
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
            },
            {
                name:'firstName'
            },
            {
                name:'lastName'
            },
            {
                name:'phoneNumber'
            },
            {
                name:'registrationType',
                type:'hidden',
                value:'InApp'
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
 
export default Register;
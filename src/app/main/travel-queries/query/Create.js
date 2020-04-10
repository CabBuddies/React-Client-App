import React, { Component } from 'react';
 
import Form from '../../../commons/form/Form';

import userState from '../../../../utils/UserState';

import TQQuery from 'api-library-travel-queries/api/query';

class Create extends Component {
 
  async submitForm(data){
    console.log(TQQuery);
    userState.getUser()
    data.tags = data.tags.split(',')
    let result = await (await TQQuery.createQuery(userState.getUser(),data.title,data.body,data.tags)).json();
    console.log(result);
    window.location = '/query'
  }

  render() {
    let formSchema = {
        onSubmit:this.submitForm,
        fields:[
            {
                name:'title',
                required:true
            },
            {
                name:'body',
                required:true,
                type:'textarea'
            },
            {
                name:'tags',
                required:true
            }
        ]
    };
    console.log(formSchema);
    return (
      <Form formSchema={formSchema}/>
    );
  }
}
 
export default Create;
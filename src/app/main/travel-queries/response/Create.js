import React, { Component } from 'react';
 
import Form from '../../../commons/form/Form';

import userState from '../../../../utils/UserState';

import TQResponse from 'api-library-travel-queries/api/response';

class Create extends Component {

  render() {
    let queryId = this.props.queryId;
    
    if(queryId === undefined)
        return (
            <p>Loading...</p>
        )

    const submitForm = async (data) => {
        console.log(TQResponse);
        data.queryId = queryId;
        let result = await (await TQResponse.createResponse(userState.getUser(),data.queryId,data.body)).json();
        console.log(result);
        window.location.reload();
    }   

    let formSchema = {
        onSubmit:submitForm,
        fields:[
            {
                name:'body',
                required:true,
                type:'textarea'
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
import React, { Component } from 'react';
 
import Form from '../../../commons/form/Form';

import userState from '../../../../utils/UserState';

import TQComment from 'api-library-travel-queries/api/comment';

class Create extends Component {

  render() {
    let queryId = this.props.queryId;
    let responseId = this.props.responseId;
    
    if(queryId === undefined && responseId === undefined)
        return (
            <p>Loading...</p>
        )

    const submitForm = async (data) => {
        console.log(TQComment);
        data.queryId = queryId;
        data.responseId = responseId;
        let result = await (await TQComment.createComment(userState.getUser(),data.queryId,data.responseId,data.body)).json();
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
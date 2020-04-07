import React, { Component } from 'react';
import ResponseList from './ResponseList';
import Form from '../../../../commons/form/Form';
 
import userState from '../../../../../utils/UserState';

import TQResponse from 'api-library-travel-queries/api/response';

class Query extends Component {

  render() {
    let query = this.props.data
    if(query.title === undefined)
        return (
            <p>Loading...</p>
        )

        const submitForm = async (data) => {
            console.log(TQResponse);
            data.queryId = query._id;
            let result = await (await TQResponse.createResponse(userState.getUser(),data.queryId,data.body)).json();
            console.log(result);
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
        }

    return (
      <table border="1">
        <tbody>
            <tr>
                <td>
                    <table border="1">
                        <tbody>
                            <tr>
                                <th colSpan="2">
                                    <p>
                                        {query.title}
                                    </p>
                                </th>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <p>
                                        {query.body}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>
                                        {query.tags.join('|')}
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        {query.user.email}
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <pre>
                        {JSON.stringify(query.stats,undefined,2)}
                    </pre>
                </td>
            </tr>
            <tr>
                <td>
                    <h3>Post Your Response</h3>
                    <Form formSchema={formSchema}/>
                </td>
            </tr>
            <tr>
                <td>
                    <ResponseList id={query._id+'123'} data={query.responses}/>
                </td>
            </tr>
        </tbody>
      </table>
    );
  }
}
 
export default Query;
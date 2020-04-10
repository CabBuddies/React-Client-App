import React, { Component } from 'react';
import CommentList from '../../comment/views/CommentList';
import {default as CCreate} from '../../comment/Create';
import Stats from '../../stats/views/Stats';
 
class Response extends Component {
 
  render() {
    let response = this.props.data
    //let link = "/query/read/"+query._id
    return (
      <table border="1">
        <tbody>
            <tr>
                <td>Score : {response.stats.score}</td>
                <td>
                    <table border="1">
                        <tbody>
                            <tr>
                                <td >{response.body}</td>
                            </tr>
                            <tr>
                                <td>{response.user.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <Stats id={response._id+'st'} data={response.stats}/>
                </td>
            </tr>
            <tr>
              <td colSpan="2">
                <table border="1">
                    <tbody>
                        <tr>
                            <td>
                                <h4>Post A Comment</h4>
                                <CCreate id={response._id+'cc'} responseId={response._id}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                              <CommentList id={response._id+'cl'} data={response.comments}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
              </td>
            </tr>
        </tbody>
      </table>
    );
  }
}
 
export default Response;
import React, { Component } from 'react';
 
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
        </tbody>
      </table>
    );
  }
}
 
export default Response;
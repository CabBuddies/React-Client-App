import React, { Component } from 'react';
 
class Comment extends Component {
 
  render() {
    return (
      <table border="1">
            <tbody>
                <tr>
                    <th>Text</th>
                    <td>{this.props.data.body}</td>
                </tr>
                <tr>
                    <th>Posted By</th>
                    <td>{this.props.data.user.email}</td>
                </tr>
                <tr>
                    <th>Posted On</th>
                    <td>{this.props.data.postedOn}</td>
                </tr>
            </tbody>
      </table>
    );
  }
}
 
export default Comment;
import React, { Component } from 'react';
 
class Comment extends Component {
 
  render() {
    let comment = this.props.data;
    return (
      <table border="1">
            <tbody>
                <tr>
                    <th>Text</th>
                    <td>{comment.body}</td>
                </tr>
                <tr>
                    <th>Posted By</th>
                    <td>{comment.user.email}</td>
                </tr>
                <tr>
                    <th>Posted On</th>
                    <td>{comment.postedOn}</td>
                </tr>
            </tbody>
      </table>
    );
  }
}
 
export default Comment;
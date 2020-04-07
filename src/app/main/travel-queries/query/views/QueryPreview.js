import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class QueryPreview extends Component {
 
  render() {
    let query = this.props.data
    if(query.user === null)
      return (<p>Loading...</p>)
    let link = "/query/read/"+query._id
    return (
      <table border="1">
        <tbody>
            <tr>
                <td>Views : {query.stats.viewCount}</td>
                <td>Responses : {query.stats.responseCount}</td>
                <td>Score : {query.stats.score}</td>
                <td>
                    <table border="1">
                        <tbody>
                            <tr>
                                <td colSpan="2"><Link to={link}>{query.title}</Link></td>
                            </tr>
                            <tr>
                                <td>{query.tags.join('|')}</td>
                                <td>{query.user.email}</td>
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
 
export default QueryPreview;
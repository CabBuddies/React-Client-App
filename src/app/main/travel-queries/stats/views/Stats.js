import React, { Component } from 'react';
 
class Stats extends Component {
 
  render() {
    let stats = this.props.data;
    if(stats.upVoteCount===undefined)
        return <p>Loading...</p>
    return (
      <table border="1">
            <tbody>
                <tr>
                    <th>viewCount</th>
                    <th>Response Count</th>
                    <th>Follow Count</th>
                    <th>UpVote Count</th>
                    <th>DowVote Count</th>
                    <th>Spam Report Count</th>
                    <th>Score</th>
                </tr>
                <tr>
                    <td>{stats.viewCount}</td>
                    <td>{stats.responseCount}</td>
                    <td>{stats.followCount}</td>
                    <td>{stats.upVoteCount}</td>
                    <td>{stats.downVoteCount}</td>
                    <td>{stats.spamReportCount}</td>
                    <td>{stats.score}</td>
                </tr>                
            </tbody>
      </table>
    );
  }
}
 
export default Stats;
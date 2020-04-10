import React, { Component } from 'react';
import ResponseList from '../../response/views/ResponseList';

import CommentList from '../../comment/views/CommentList';
import {default as RCreate} from '../../response/Create';
import {default as CCreate} from '../../comment/Create';
import Stats from '../../stats/views/Stats';

class Query extends Component {

  render() {
    let query = this.props.data
    if(query.title === undefined)
        return (
            <p>Loading...</p>
        )

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
                    <Stats id={query._id+'st'} data={query.stats}/>
                </td>
            </tr>
            <tr>
                <td>
                    <table border="1">
                        <tbody>
                            <tr>
                                <td>
                                    <h3>Post A Comment</h3>
                                    <CCreate id={query._id+'cc'} queryId={query._id}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <CommentList id={query._id+'cl'} data={query.comments}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <h3>Post Your Response</h3>
                    <RCreate id={query._id+'rc'} queryId={query._id}/>
                </td>
            </tr>
            <tr>
                <td>
                    <ResponseList id={query._id+'rl'} data={query.responses}/>
                </td>
            </tr>
        </tbody>
      </table>
    );
  }
}
 
export default Query;
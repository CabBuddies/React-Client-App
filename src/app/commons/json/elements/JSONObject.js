import React, { Component } from 'react';
import JSONPrint from '../JSONPrint';
 
class JSONObject extends Component {
 
  render() {
    let data = this.props.data;
    let elements = [];
    let keys = Object.keys(data);
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        elements.push(
            <tr>
                <th>{key}</th>
                <td><JSONPrint data={data[key]}/></td>
            </tr>
        )
    }
    return (
      <table border="1">
        <tbody>
            {elements}
        </tbody>
      </table>
    );
  }
}
 
export default JSONObject;
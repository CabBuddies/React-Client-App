import React, { Component } from 'react';
import JSONPrint from '../JSONPrint';
 
class JSONArray extends Component {
 
  render() {
    let data = this.props.data;
    let elements = [];
    for (let index = 0; index < data.length; index++) {
        elements.push(
            <li>
                <JSONPrint data={data[index]}/>
            </li>
        )
    }
    return (
      <ul>
        {elements}
      </ul>
    );
  }
}
 
export default JSONArray;
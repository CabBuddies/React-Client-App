import React, { Component } from 'react';
import JSONArray from './elements/JSONArray';
import JSONObject from './elements/JSONObject';
 
class JSONPrint extends Component {
 
  render() {
    let data = this.props.data;
    if(data === undefined)
        return <p>Loading...</p>
    else if(Array.isArray(data))
        return <JSONArray data={data}/>
    else if(data.constructor === ({}).constructor)
        return <JSONObject data={data}/>
    else 
        return <p>{data}</p>
  }
}
 
export default JSONPrint;
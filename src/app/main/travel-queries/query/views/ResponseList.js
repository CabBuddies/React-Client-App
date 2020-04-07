import React, { Component } from 'react';
import Response from './Response';
 
class ResponseList extends Component {
 
  render() {
    let listPreviews = []
    let dataList = this.props.data
    for (let index = 0; index < dataList.length; index++) {
        let element = dataList[index];
        element = (
            <li key={element._id+'123'}>
                <Response id={element._id} data={element}/>
            </li>
        )
        listPreviews.push(element);
    }
    return (
      <ul>
        {listPreviews}
      </ul>
    );
  }
}
 
export default ResponseList;
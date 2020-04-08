import React, { Component } from 'react';
 
class Hidden extends Component {

  render() {
    console.log(this.props);
    return (
      <input name={this.props.name} value={this.props.value} hidden={true}/>  
    );
  }
}
 
export default Hidden;
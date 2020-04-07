import React, { Component } from 'react';
 
class TextArea extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <textarea name={this.props.name} required={this.props.required}></textarea>
        <br/>
      </div>
    );
  }
}
 
export default TextArea;
import React, { Component } from 'react';
 
class Input extends Component {
 
  wordify (camelCase) {
    var result = camelCase.replace( /([A-Z])/g, " $1" );
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  render() {
    console.log(this.props);
    let placeholder = this.wordify(this.props.name)
    return (
      <div>
        <input name={this.props.name} placeholder={placeholder} required={this.props.required}/>
        <br/>
      </div>
    );
  }
}
 
export default Input;
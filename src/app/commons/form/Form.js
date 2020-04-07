import React, { Component } from 'react';

import Input from './elements/Input';
import TextArea from './elements/TextArea';
import $ from 'jquery';
class Form extends Component {

  render() {
    console.log(this.props);

    let formSchema = this.props.formSchema;
    let fields = JSON.parse(JSON.stringify(formSchema.fields));
    for (let index = 0; index < fields.length; index++) {
        if(fields[index].type === undefined){
          fields[index].type = 'input'
        }
        switch(fields[index].type){
          default:
            fields[index] = <Input key={fields[index].name} name={fields[index].name} required={fields[index].required} />
            break
          case 'textarea':
            fields[index] = <TextArea key={fields[index].name} name={fields[index].name} required={fields[index].required} />
            break

        }
    }
    
    //this.callbackOnSubmit = formSchema.onSubmit;

    let basicOnSubmit = (e) => {
        e.preventDefault();
        console.log('On Submit called.')
        console.log(e);
        let arr = $(e.target).serializeArray();
        let data = {}
        for (let index = 0; index < arr.length; index++) {
            data[arr[index].name] = arr[index].value;
        }
        console.log(this.props)
        //this.callbackOnSubmit(data);
        this.props.formSchema.onSubmit(data);
      };

    return (
      <form onSubmit={basicOnSubmit}>
        {fields}
        <input type='submit'/>
      </form>
    );
  }
}
 
export default Form;
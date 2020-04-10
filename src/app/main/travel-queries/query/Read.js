import React, { Component } from 'react';
import userState from '../../../../utils/UserState';
 
import TQQueries from 'api-library-travel-queries/api/query';
import Query from './views/Query';

class Read extends Component {
 
    state = {
        result:{}
    }

  async componentWillMount(){
    console.log('Home componentDidMount '+this.props.match.params.id)
    let result = await (await TQQueries.readQuery(userState.getUser(),this.props.match.params.id)).json();
    console.log(result);
    this.setState({result});
    //alert(JSON.stringify(result))
  }

  render() {
    console.log('Read rendered')
    return (
      <Query id={1} data={this.state.result}/>
    );
  }
}
 
export default Read;
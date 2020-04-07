import React, { Component } from 'react';
import userState from '../../../../utils/UserState';
 
import TQQueries from 'api-library-travel-queries/api/query';
import QueryList from './views/QueryList';
import { Link } from 'react-router-dom';

class Home extends Component {
 
    state = {
        result:[]
    }

  async componentWillMount(){
    console.log('Home componentDidMount')
    let result = await (await TQQueries.listQueries(userState.getUser())).json();
    console.log(result);
    this.setState({result});
    //alert(JSON.stringify(result))
  }

  render() {
    console.log('Home rendered')
    return (
      <div>
        <Link to="/query/create">Create Query</Link>
        <QueryList data={this.state.result}/>
      </div>
    );
  }
}
 
export default Home;
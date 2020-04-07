import React, { Component } from 'react';
import './App.css';
 
import {
  BrowserRouter as Router,
  //Switch,
  //Route,
  //Link
} from "react-router-dom";

import Header from './app/header/Header'
import Main from './app/main/Main'
import Footer from './app/footer/Footer'

class App extends Component {
 
  render() {
 
    return (
      <Router>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    );
  }
}
 
export default App;
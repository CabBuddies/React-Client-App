import React, { Component , Suspense , lazy } from 'react';
 
import {
    //BrowserRouter as Router,
    Switch,
    Route,
    //Link
  } from "react-router-dom";

class Main extends Component {
 
    Home = lazy(() => import('./home/Home'))
    Register = lazy(() => import('./user-management/register/Register'))
    Login = lazy(() => import('./user-management/login/Login'))
    Logout = lazy(() => import('./user-management/logout/Logout'))
    MyAccount = lazy(() => import('./user-management/my-account/MyAccount'))
    About = lazy(() => import('./about/About'))
    TQQCreate = lazy(() => import('./travel-queries/query/Create'))
    TQQHome = lazy(() => import('./travel-queries/query/Home'))
    TQQRead = lazy(() => import('./travel-queries/query/Read'))

    render() {
    
        return (
            <Switch>
                <Suspense fallback = {<h1>Issue</h1>}>
                    <Route exact path="/" component={this.Home}/>
                    <Route exact path="/login" component={this.Login}/>
                    <Route exact path="/logout" component={this.Logout}/>
                    <Route exact path="/register" component={this.Register}/>
                    <Route exact path="/my-account" component={this.MyAccount}/>
                    <Route exact path="/about" component={this.About}/>
                    <Route exact path="/query" component={this.TQQHome}/>
                    <Route exact path="/query/create" component={this.TQQCreate}/>
                    <Route exact path="/query/read/:id" component={this.TQQRead}/>
                </Suspense>
            </Switch>
        );
    }
}
 
export default Main;
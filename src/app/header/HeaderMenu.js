import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import userState from '../../utils/UserState';
 
class HeaderMenu extends Component {

    state = {}

    componentDidMount(){
        userState.listenUpdates(this)
        //this.onUserStateChange()
    }

    render() {
        let hasUser = false;
        try {
            hasUser = this.state.hasUser
            console.log(hasUser)
        } catch (error) {
            //this.onUserStateChange();
            hasUser = userState.hasUser()
        }
        // let hasUser = false;
        let tr = hasUser ? 
                    (
                        <tr>
                            <td><Link to="/">Home</Link></td>
                            <td><Link to="/my-account">My Account</Link></td>
                            <td><Link to="/logout">Logout</Link></td>
                            <td><Link to="/about">About</Link></td>
                            <td><Link to="/query">Query</Link></td>
                        </tr>
                    ) :
                    (
                        <tr>
                            <td><Link to="/">Home</Link></td>
                            <td><Link to="/register">Register</Link></td>
                            <td><Link to="/login">Login</Link></td>
                            <td><Link to="/about">About</Link></td>
                            <td><Link to="/query">Query</Link></td>
                        </tr>
                    ) ;

        return (
            <nav>
                <table>
                    <tbody>{tr}</tbody>
                </table>
            </nav>
        );
    }
}
 
export default HeaderMenu;
import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
 
class Header extends Component {

    render() {
    
        return (
            <table>
                <tbody>
                    <tr>
                        <td><h1>CabBuddies</h1></td>
                        <td><HeaderMenu/></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
 
export default Header;
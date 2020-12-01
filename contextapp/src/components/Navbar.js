import React , {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext; // Only works in Class Based components!
    render() {
        console.log(this.context); // Accesing the Context 
        const {isLightTheme , light , dark} = this.context;
        const theme = isLightTheme ? light : dark;

        return ( 
            <nav style = {{background : theme.ui , color : theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;

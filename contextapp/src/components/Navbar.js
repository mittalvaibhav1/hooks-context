import React , { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
    const {isAuthenticated ,toggleAuth} = useContext(AuthContext);
    const {isLightTheme , light , dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style = {{background : theme.ui , color : theme.syntax , transition : '0.2s'}}>
            <h1>Context App</h1>
            <div onClick = {toggleAuth} >
                {isAuthenticated ? 'Logged In' : 'Logged Out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;

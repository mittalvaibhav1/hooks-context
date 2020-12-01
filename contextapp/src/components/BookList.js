import React , {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext; // Only valid in class based components
    render() {
        const {isLightTheme , light , dark} = this.context; // Accesing the context
        const theme = isLightTheme ? light : dark; 
        return ( 
            <div className='book-list' style= {{background: theme.bg , color : theme.syntax}}>
                <ul>
                    <li style={{background : theme.ui}}>The name of the Wind</li>
                    <li style={{background : theme.ui}}>The final Empire</li>
                    <li style={{background : theme.ui}}>The way of Kings</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;
import React , {Component} from 'react';

class BookList extends Component {
    render() { 
        return ( 
            <div className='book-list'>
                <ul>
                    <li>The way of Kings</li>
                    <li>THe name of the Wind</li>
                    <li>The final Empire</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;
import React , { createContext , useState } from 'react';
import {v1 as uuidv1} from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books , setBooks] = useState([
        {title : 'Name of the Wind', author : 'Patrick Rothfuss', id : uuidv1()},
        {title : 'The Final Empire', author : 'Brandon Sanderson', id : uuidv1()}
    ]);
    const addBook = (title, author) => {
        setBooks([...books , {title, author,id : uuidv1() }])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => id !== book.id))
    }
    return ( 
        <BookContext.Provider value = {{books , addBook , removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
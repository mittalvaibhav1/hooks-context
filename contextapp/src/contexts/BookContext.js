import React , { createContext , useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title : 'Name of the Wind', id : uuidv1()},
        {title : 'The Way of Kings', id : uuidv1()},
        {title : 'The Final Empire', id : uuidv1()},
        {title : 'The Hero of Ages', id : uuidv1()}
    ]);
    return ( 
        <BookContext.Provider value = {{books,setBooks}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;
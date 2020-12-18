import React , { useState } from 'react';

const NewSongForm = () => {
    return ( 
        <form onSubmit= {}>
            <label>Song name:</label>
            <input type = "text" required />
            <input type = "submit" value = "Add Song" />
        </form>
     );
}
 
export default NewSongForm;
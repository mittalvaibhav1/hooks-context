import React , {useState} from 'react';

const SongList = () => {
    const[songs, setSongs] = useState([
        {title: 'Almost Home', id: 1},
        {title: 'Memory Gospel', id: 2},
        {title: 'This Wild Darkness', id: 3}
    ]);
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(({title, id}) => {
                    return (<li key = {id}>{title}</li>);
                })}
            </ul>
        </div>
     );
}
 
export default SongList;
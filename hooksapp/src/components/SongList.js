import React , { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid'
import NewSongForm from './NewSongForm';
const SongList = () => {
    const[songs, setSongs] = useState([
        {title: 'Almost Home', id: 1},
        {title: 'Memory Gospel', id: 2},
        {title: 'This Wild Darkness', id: 3}
    ]);
    const[age,setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs,{title , id : uuidv1() }]);
    }
    useEffect(() => {
        console.log('useEffect hook ran', songs);
    },[songs]);
    useEffect(() => {
        console.log('useEffect hook ran', age);
    },[age]);
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(({title, id}) => {
                    return (<li key = {id}>{title}</li>);
                })}
            </ul>
            <NewSongForm addSong = {addSong}/>
            <button onClick = {() => setAge(age + 1)}>Increment Age : {age}</button>
        </div>
     );
}
 
export default SongList;
import {useState} from "react";
import mockData from "../mockdata";

export default function Form({setResult}){
    const data  = mockData().tracks.items
    const [song, setSong] = useState('')

    const onSongChange = ({target}) => {
        setSong(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setResult(data.filter(piece => {
            return piece.name.toLowerCase().includes(song.toLowerCase());
        }));
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                name='song'
                value={song}
                onChange={onSongChange}
            />
            <button type='submit'>Search</button>
        </form>
    )
}
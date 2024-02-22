import React, {useState} from "react";
import Tracklist from "./Tracklist";

export default function Playlist({trackList}){
    const [title, setTitle] = useState("Unnamed Playlist")
    const onTitleChange = ({target}) => {
        setTitle(target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Playlist title"
                onChange={onTitleChange}
                value={title}
            />
            <Tracklist trackList={trackList}/>
            <button type='submit'>Add to Spotify</button>
        </form>
    )
}
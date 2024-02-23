import React, {useEffect, useState} from "react";
import Tracklist from "./Tracklist";
import CreatePlaylist from "./CreatePlaylist";
import addToPlaylist from "./addToPlaylist";

export default function Playlist({trackList, user_id, token}){
    const [title, setTitle] = useState("Unnamed Playlist")
    const onTitleChange = ({target}) => {
        setTitle(target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        const createPlaylist = async () => {
            let response = await CreatePlaylist(user_id, token, title);
            addToPlaylist(response.id, token, trackList);
        }

        document.getElementById('createPlaylist').addEventListener('submit', createPlaylist);
        return () => {
            document.getElementById('createPlaylist').removeEventListener('submit', createPlaylist);
        }
    }, [title, token, trackList, user_id]);

    return (
        <form onSubmit={onSubmit} id='createPlaylist'>
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
import {useEffect, useState} from "react";
import FetchTrack from "./FetchTrack";

export default function Form({setResult, token}){
    const [song, setSong] = useState('')

    const onSongChange = ({target}) => {
        setSong(target.value)
    }

    useEffect(() => {
        const search = async (e) => {
            e.preventDefault()
            if(!song){
                return
            }
            const result = await FetchTrack(song, token);
            setResult(result.tracks.items)
        }


        document.getElementById('searchForm').addEventListener('submit', search)
        return () => {
            document.getElementById('searchForm').removeEventListener('submit', search)
        }
    }, [setResult, song, token]);

    return (
        <form id='searchForm'>
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
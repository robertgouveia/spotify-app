import React from "react";

export default function Track({song, add, remove, trackList}) {

    return (
        <>
            <li key={song.name}>
                {song.name}
                <button value={song.name} onClick={(trackList.includes(song.name)) ? remove : add}>
                    {(trackList.includes(song.name)) ? 'remove' : 'add'}
                </button>
            </li>

        </>
    )
}
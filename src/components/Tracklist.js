import React from "react";

export default function Tracklist({trackList}){
    return (
        <ul>
            {trackList.map((track) => {
                return <li key={track.id}>{track.name}</li>
            })}
        </ul>
    )
}
import React from "react";

export default function Tracklist({trackList}){
    return (
        <ul>
            {trackList.map((track) => {
                return <li key={track.id}>
                    <img src={track.album.images[0].url} alt='album cover' width='60' height='60'/>
                    <div>
                        <h1>{track.name}</h1>
                        {track.album['name']}
                    </div>
                </li>
            })}
        </ul>
    )
}
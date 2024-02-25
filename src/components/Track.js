import React from "react";

export default function Track({ song, add, remove, result, trackList }) {
    const duplicate = () => {
        return result.filter(item => {
            return trackList.some(track => track.id === item.id);
        });
    };
    return (
        <li key={song.id}>
            <img src={song.album.images[0].url} alt='album cover' width='60' height='60'/>
            <div>
                <h1>{song.name}</h1>
                {song.album['name']}
            </div>
            <button value={song.id} onClick={() => duplicate().includes(song) ? remove(song) : add(song)}>
                {duplicate().includes(song) ? <i className="fa-solid fa-trash"></i> :
                    <i className="fa-solid fa-plus"></i>}
            </button>
        </li>
    );
}
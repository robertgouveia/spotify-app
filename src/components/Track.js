import React from "react";

export default function Track({ song, add, remove, result, trackList }) {
    const duplicate = () => {
        return result.filter(item => {
            return trackList.some(track => track.id === item.id);
        });
    };

    return (
        <li key={song.id}>
            {song.name}
            {song.album['name']}
            {song.uri}
            <button value={song.id} onClick={() => duplicate().includes(song) ? remove(song) : add(song)}>
                {duplicate().includes(song) ? 'remove' : 'add'}
            </button>
        </li>
    );
}
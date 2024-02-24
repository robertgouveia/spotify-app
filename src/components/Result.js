import React from "react";
import Track from "./Track";

export default function Result({result, trackList, setTrackList}){
    const onAddClick = (song) => {
        if(!trackList.includes(song)){
            setTrackList((prev) => {
                return [song, ...prev]
            })
        }
    }

    const onRemoveClick = (song) => {
        setTrackList((prev) => {
            return prev.filter((item) => {
                return item.id !== song.id
            })
        })
    }


    if(result){
        return (
            <ul>
                {result.slice(0,10).map(song => {
                    return <Track result={result} song={song} add={onAddClick} remove={onRemoveClick}
                                  trackList={trackList}/>
                })}
            </ul>
        )
    }
}
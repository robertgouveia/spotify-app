import React from "react";
import Track from "./Track";

export default function Result({result, setResult, trackList, setTrackList}){
    const onAddClick = ({target}, ) => {
        if(!trackList.includes(target.value)){
            setTrackList((prev) => {
                return [target.value, ...prev]
            })
        }
    }

    const onRemoveClick = ({target}) => {
        setTrackList((prev) => {
            return prev.filter(item => {
                return item !== target.value
            })
        })
    }


    if(result){
        return (
            <section>
                <ul>
                    {result.map(song => {
                        return <Track song={song} add={onAddClick} remove={onRemoveClick} trackList={trackList}/>
                    })}
                </ul>
            </section>
        )
    }
}
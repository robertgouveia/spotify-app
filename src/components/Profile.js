import React, {useEffect} from "react";
import FetchProfile from "./FetchProfile";

export default function Profile({accessToken, profile, setProfile}){


    useEffect((profile) => {
        const getProfile = async () => {
            setProfile(await FetchProfile(accessToken));
        }
        getProfile()
    }, [accessToken, setProfile]);

    if(profile){
        return (
            <a href={profile.external_urls.spotify}>
                <h1 id='profile_name'>{profile.display_name}</h1>
                <p>{profile.followers.total}</p>
                <h2>{profile.country}</h2>
            </a>
        )
    }
}
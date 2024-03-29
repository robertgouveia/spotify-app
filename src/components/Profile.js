import React, {useEffect} from "react";
import FetchProfile from "./FetchProfile";

export default function Profile({accessToken, profile, setProfile, profile_id}){


    useEffect(() => {
        const getProfile = async () => {
            const response = await FetchProfile(accessToken);
            setProfile(response)
            profile_id(response.id)
        }
        getProfile()
    }, [accessToken, profile_id, setProfile]);

    if(profile){
        return (
            <a href={profile.external_urls.spotify}>
                <p>signed in as:</p>
                <h1 id='profile_name'>{profile.display_name}</h1>
            </a>
        )
    }
}
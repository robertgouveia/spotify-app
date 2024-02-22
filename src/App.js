import React, {useEffect, useState} from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import Playlist from "./components/Playlist";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import getToken from "./components/getToken";

export default function App() {
    const [result, setResult] = useState([])
    const [trackList, setTrackList] = useState([])
    const [token, setToken] = useState('')
    const [profile, setProfile] = useState()
    const client_id = '081f3f5c5fb440c08fbae4b62238dc82';
    const redirect_uri = 'http://localhost:3000/callback';

    useEffect(() => {
        getToken(setToken)

        window.addEventListener('hashchange', getToken);
        return () => {
            window.removeEventListener('hashchange', getToken);
        }
    }, []);

    if(!token){
        return(
            <LoginForm client_id={client_id} redirect_uri={redirect_uri}/>
        )
    } else {
        return (
            <>
                <Profile accessToken={token} profile={profile} setProfile={setProfile}/>
                <Form setResult={setResult}/>
                <Result result={result} trackList={trackList} setTrackList={setTrackList}/>
                <Playlist trackList={trackList}/>
            </>
        );
    }
}
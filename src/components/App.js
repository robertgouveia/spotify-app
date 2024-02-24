import React, {useEffect, useState} from "react";
import Form from "./Form";
import Result from "./Result";
import Playlist from "./Playlist";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import getToken from "./getToken";

export default function App() {
    const [result, setResult] = useState([])
    const [trackList, setTrackList] = useState([])
    const [token, setToken] = useState('')
    const [profile, setProfile] = useState()
    const [profile_id, setProfile_id] = useState('');
    const client_id = '081f3f5c5fb440c08fbae4b62238dc82';
    const redirect_uri = 'http://localhost:3000';

    useEffect(() => {
        getToken(setToken)

        window.addEventListener('hashchange', getToken);
        return () => {
            window.removeEventListener('hashchange', getToken);
        }
    }, []);

    if(!token){
        return(
            <>
                <nav>
                    <i className="fa-brands fa-spotify"></i><h1>Playlist It</h1>
                </nav>
                <section>
                    <div className='container'>
                        <h1>Log in to Spotify</h1>
                        <LoginForm client_id={client_id} redirect_uri={redirect_uri}/>
                    </div>
                </section>
            </>
        )
    } else {
        return (
            <section className='MainUI'>
                <div className='container_search'>
                    <div className='search'>
                        <Form setResult={setResult} token={token}/>
                    </div>
                    <div className='results'>
                        <Result result={result} trackList={trackList} setTrackList={setTrackList}/>
                    </div>
                </div>
                <div className='container_playlist'>
                    <Playlist trackList={trackList} user_id={profile_id} token={token}/>
                    <Profile accessToken={token} profile={profile} setProfile={setProfile} profile_id={setProfile_id}/>
                </div>
            </section>
        );
    }
}

//
//
//
//
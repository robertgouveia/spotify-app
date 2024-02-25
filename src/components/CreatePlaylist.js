export default async function CreatePlaylist(user_id, token, playlistName){
    const response = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': playlistName,
            'description': 'Playlist created by PlaylistIt',
            'public': false
        })
    })
    if(response.ok){
        return await response.json()
    } else {
        return response.error;
    }
}
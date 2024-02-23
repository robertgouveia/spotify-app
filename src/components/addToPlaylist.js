export default async function addToPlaylist(playlist_id, token, uris){
    console.log(playlist_id)
    const uri_id = [];
    for(let i = 0; i < uris.length; i++){
        uri_id.push(uris[i].uri);
    }
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'uris': uri_id,
            'position': 0
        })
    })
    if(response.ok){
        return await response.json()
    } else {
        return response
    }
}
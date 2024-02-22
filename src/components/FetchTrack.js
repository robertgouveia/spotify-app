export default async function FetchTrack(song, token){
    const response = await fetch('https://api.spotify.com/v1/search?q=' + encodeURIComponent(song) + '&type=track', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if(response.ok){
        return await response.json()
    } else {
        return response
    }
}
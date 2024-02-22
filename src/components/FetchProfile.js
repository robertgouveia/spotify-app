export default async function FetchProfile(accessToken){
    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
    });
    if(response.ok){
        return await response.json()
    }
    else {
        return response;
    }

}
export default function getToken(setToken){
    const clearHash = () => {
        window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
    };

    const  hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessTokenValue = hashParams.get('access_token');
    if(accessTokenValue){
        setToken(accessTokenValue)
        clearHash()
    }
}
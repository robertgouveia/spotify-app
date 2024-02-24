export default function LoginForm({client_id, redirect_uri}){
    const onSubmit = (e) => {
        e.preventDefault()
        let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        url += '&scope=' + encodeURIComponent('playlist-modify-private')
        window.location.href = url;
    }

    return (
        <form onSubmit={onSubmit}>
            <button type='submit'>Log in</button>
        </form>
    )
}
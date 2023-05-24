function Contact() {
    return (
        <div>
            <h3>Our contacts:</h3>
            <p>If you have any suggestions or comments on our site, you can always contact us in support and write your request. Have a nice cooking!</p>
            <div className="cont_in">
                <i class="material-icons">library_music</i>
                <a href="https://music.yandex.ru/users/music.partners/playlists/2084" target="_blank">Music for your cooking</a>
            </div>
            <div className="cont_in">
                <i class="material-icons">mail</i>
                <a >cooking.you@yandex.ru</a>
            </div>
            <div className="cont_in">
                <i class="material-icons">local_phone</i>
                <a>+1 543 845 27 84</a>
            </div>
        </div>
    )
}
export { Contact };
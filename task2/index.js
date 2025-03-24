
const searchSong =() =>{
    let songName = document.getElementById('search-field').value
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then(res => res.json())
    .then(data => displaySong(data.data))
}

const displaySong = songs => {
    const songContainer = document.getElementById("song-container")
    songContainer.innerHTML = ''
    songs.forEach(song => {
        console.log(song)
        console.log(song.album.cover_medium)
        const songDiv = document.createElement("div")
        songDiv.className = "single-result row align-items-center my-3 p-3"
        songDiv.innerHTML = `
        
                    <div class="col-lg-2 text-center">
                        <img class src=${song.album.cover_medium} style="height:50px ;" alt=""/>
                    </div>
                    <div class="col-lg-4 text-center">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                    </div>
                    <div class="col-lg-6 text-center">   
                        <audio controls>
                            <source src=${song.preview} type="">
                        </audio>
                    </div>
                            `
        songContainer.appendChild(songDiv)
    });
}
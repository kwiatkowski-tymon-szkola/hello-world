interface Props {
    source: string
    title: string
    artist: string
    genre: string
    releaseYear: number
    songs: { 
        title: string
        duration: number
    } []
}

function AlbumDisplay({source, title, artist, genre, releaseYear, songs}: Props) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <h2>{artist}</h2>
                <p>Gatunek: {genre}</p>
                <p>Rok wydania: {releaseYear}</p>
                <ol>
                    {songs.map(song => {
                        return (
                            <li>{song.title} - {song.duration}s</li>
                        )
                    })}
                </ol>
            </div>            
        </div>
    )
}

export default AlbumDisplay
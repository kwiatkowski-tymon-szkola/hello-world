interface Props {
    source: string
    title: string
    artist: string
    genre: string
    releaseYear: number
}

function AlbumDisplay({source, title, artist, genre, releaseYear}: Props) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <h2>{artist}</h2>
                <p>Gatunek: {genre}</p>
                <p>Rok wydania: {releaseYear}</p>
            </div>            
        </div>
    )
}

export default AlbumDisplay
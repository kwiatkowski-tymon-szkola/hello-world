import type { SongProps, AlbumProps } from "../interfaces";

function Song({ title, duration }: SongProps) {
    return (
        <li>
            {title} - {duration}s
        </li>
    );
}

function AlbumDisplay({
    source,
    title,
    artist,
    genre,
    releaseYear,
    songs,
}: AlbumProps) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <h2>{artist}</h2>
                <p>Gatunek: {genre}</p>
                <p>Rok wydania: {releaseYear}</p>
                <ol>
                    {songs.map((song) => {
                        return (
                            <Song title={song.title} duration={song.duration} />
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}

export default AlbumDisplay;

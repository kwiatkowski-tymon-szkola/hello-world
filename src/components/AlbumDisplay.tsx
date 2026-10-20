import type { AlbumProps, SongProps } from "../interfaces";

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
                <div>
                    <h2>{artist}</h2>
                    <p>Gatunek: {genre}</p>
                    <p>Rok wydania: {releaseYear}</p>
                    <ol>
                        {songs.length === 0 ? (
                            <h3 className="red-label">Brak utworów</h3>
                        ) : (
                            songs.map((song) => (
                                <Song
                                    title={song.title}
                                    duration={song.duration}
                                />
                            ))
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default AlbumDisplay;

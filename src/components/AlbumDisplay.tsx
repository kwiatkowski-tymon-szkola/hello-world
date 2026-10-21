import type { AlbumProps, SongProps } from "../interfaces";

function Song({ title, duration, index }: SongProps & { index: number }) {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{title}</td>
            <td className="text-end">{duration}s</td>
        </tr>
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
        <div className="card h-100 p-2">
            <img src={source} alt={title} className="card-img-top" />
            <div className="card-body">
                <h1 className="card-title h1">{title}</h1>
                <h2 className="card-subtitle mb-2">{artist}</h2>
                <p className="card-text mb-1">Gatunek: {genre}</p>
                <p className="card-text mb-1">Rok wydania: {releaseYear}</p>
                {songs.length === 0 ? (
                    <div className="alert alert-danger" role="alert">
                        Brak piosenek
                    </div>
                ) : (
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tytuł</th>
                                <th scope="col text-ends">Czas trwania</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {songs.map((song, index) => (
                                <Song
                                    title={song.title}
                                    duration={song.duration}
                                    index={index + 1}
                                />
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default AlbumDisplay;

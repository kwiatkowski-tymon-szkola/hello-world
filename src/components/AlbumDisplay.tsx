import type { AlbumProps } from "../interfaces";

function handleSongClick(songTitle: string, albumTitle: string) {
  console.log(`Wybrano utwór: ${songTitle} z ${albumTitle}`);
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
                <th scope="col" className="text-end">
                  Czas trwania
                </th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {songs.map((song, index) => (
                <tr onClick={() => handleSongClick(song.title, title)}>
                  <th scope="row">{index + 1}</th>
                  <td>{song.title}</td>
                  <td className="text-end">{song.duration}s</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AlbumDisplay;

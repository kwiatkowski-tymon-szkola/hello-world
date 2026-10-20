import MovieDisplay from "./components/MovieDisplay";
import BookDisplay from "./components/BookDisplay";
import AlbumDisplay from "./components/AlbumDisplay";
import { movies, books, albums } from "./data"

movies.sort((a, b) => a.title.localeCompare(b.title));
books.sort((a, b) => a.title.localeCompare(b.title));
albums.sort((a, b) => a.title.localeCompare(b.title))

function App() {
    return (
        <main>
            <h1>Filmy</h1>
            <div className="element-list">
                {movies.map((movie) => {
                    return (
                        <MovieDisplay {...movie} />
                    )
                })}
            </div>
            <hr />
            <h1>Książki</h1>
            <div className="element-list">
                {books.map((book) => {
                    return (
                        <BookDisplay {...book} />
                    )
                })}
            </div>
            <hr />
            <h1>Albumy i piosenki</h1>
            <div className="element-list">
                {albums.map((album) => {
                    return (
                        <AlbumDisplay {...album} />
                    )
                })}
            </div>
            <hr />
            <h1>Filmy po 2010</h1>
            <div className="element-list">
                {movies.filter((movie) => movie.releaseYear > 2010).map((movie) => {
                    return (
                        <MovieDisplay {...movie} />
                    )
                })}
            </div>
            <hr />
            <h1>Książki od najnowszych</h1>
            <div className="element-list">
                {books.sort((a, b) => b.releaseYear - a.releaseYear).map((book) => {
                    return (
                        <BookDisplay {...book} />
                    )
                })}
            </div>
            <hr />
            <h1>Albumy i piosenki po ilości piosenek</h1>
            <div className="element-list">
                {albums.sort((a, b) => b.songs.length - a.songs.length).map((album) => {
                    return (
                        <AlbumDisplay {...album} />
                    )
                })}
            </div>
        </main>
    );
}

export default App;

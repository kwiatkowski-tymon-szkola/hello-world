import MovieDisplay from "./components/MovieDisplay";
import BookDisplay from "./components/BookDisplay";
import AlbumDisplay from "./components/AlbumDisplay";
import CollapsibleSection from "./components/CollapsibleSection";
import { movies, books, albums } from "./data";

movies.sort((a, b) => a.title.localeCompare(b.title));
books.sort((a, b) => a.title.localeCompare(b.title));
albums.sort((a, b) => a.title.localeCompare(b.title));

function App() {
    return (
        <main className="container">
            <h1 className="display-3 text-decoration-underline text-center fst-italic">
                Piękna aplikacja
            </h1>
            <CollapsibleSection type="movie" title="Filmy">
                {movies.map((movie) => (
                    <MovieDisplay {...movie} />
                ))}
            </CollapsibleSection>
            <hr />
            <CollapsibleSection type="book" title="Książki">
                {books.map((book) => (
                    <BookDisplay {...book} />
                ))}
            </CollapsibleSection>
            <hr />
            <CollapsibleSection type="album" title="Albumy i piosenki">
                {albums.map((album) => (
                    <AlbumDisplay {...album} />
                ))}
            </CollapsibleSection>
            {/*
            <hr />
            <CollapsibleSection type="movie" title="Filmy po 2010">
                {movies
                    .filter((movie) => movie.releaseYear > 2010)
                    .map((movie) => (
                        <MovieDisplay {...movie} />
                    ))}
            </CollapsibleSection>
            <hr />
            <CollapsibleSection type="book" title="Książki od najnowszych">
                {[...books]
                    .sort((a, b) => b.releaseYear - a.releaseYear)
                    .map((book) => (
                        <BookDisplay {...book} />
                    ))}
            </CollapsibleSection>
            <hr />
            <CollapsibleSection
                type="album"
                title="Album z największą liczbą utworów"
            >
                <AlbumDisplay
                    {...albums.reduce((a, b) =>
                        a.songs.length > b.songs.length ? a : b,
                    )}
                />
            </CollapsibleSection>
            */}
        </main>
    );
}

export default App;

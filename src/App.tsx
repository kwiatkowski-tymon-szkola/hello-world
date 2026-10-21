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
            <CollapsibleSection title="Filmy">
                {movies.map((movie) => (
                    <MovieDisplay {...movie} />
                ))}
            </CollapsibleSection>
            <hr />
            <CollapsibleSection title="Książki">
                {books.map((book) => (
                    <BookDisplay {...book} />
                ))}
            </CollapsibleSection>
            <hr />
            <CollapsibleSection title="Albumy i piosenki">
                {albums.map((album) => (
                    <AlbumDisplay {...album} />
                ))}
            </CollapsibleSection>
            <hr />
            <CollapsibleSection title="Filmy po 2010">
                {movies
                    .filter((movie) => movie.releaseYear > 2010)
                    .map((movie) => (
                        <MovieDisplay {...movie} />
                    ))}
            </CollapsibleSection>
            <hr />
            <CollapsibleSection title="Książki od najnowszych">
                {[...books]
                    .sort((a, b) => b.releaseYear - a.releaseYear)
                    .map((book) => (
                        <BookDisplay {...book} />
                    ))}
            </CollapsibleSection>
            <hr />
            <CollapsibleSection title="Album z największą liczbą utworów">
                {/* DLA KILKU ALBUMÓW Z TAKĄ SAMĄ LICZBĄ UTWORÓW
                    
                    albums
                    .filter((album) => {
                        return (
                            album.songs.length ===
                            Math.max(
                                ...albums.map((album) => album.songs.length),
                            )
                        );
                    })
                    .map((album) => {
                        return <AlbumDisplay {...album} />;
                    })
                */}
                <AlbumDisplay
                    {...albums.reduce((a, b) =>
                        a.songs.length > b.songs.length ? a : b,
                    )}
                />
            </CollapsibleSection>
        </main>
    );
}

export default App;

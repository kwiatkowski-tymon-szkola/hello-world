import CollapsibleSection from "./components/CollapsibleSection";
import { movies, books, albums } from "./data";
import MovieDisplay from "./components/MovieDisplay";
import BookDisplay from "./components/BookDisplay";
import AlbumDisplay from "./components/AlbumDisplay";

movies.sort((a, b) => a.title.localeCompare(b.title));
books.sort((a, b) => a.title.localeCompare(b.title));
albums.sort((a, b) => a.title.localeCompare(b.title));

function App() {
  return (
    <main className="container">
      <h1 className="display-3 text-decoration-underline text-center fst-italic">
        Piękna aplikacja
      </h1>
      <CollapsibleSection type="movie" title="Filmy" data={movies} renderItem={(item) => <MovieDisplay key={item.title} {...item} />} />
      <hr />
      <CollapsibleSection type="book" title="Książki" data={books} renderItem={(item) => <BookDisplay key={item.title} {...item} />} />
      <hr />
      <CollapsibleSection type="album" title="Albumy i piosenki" data={albums} renderItem={(item) => <AlbumDisplay key={item.title} {...item} />} />
    </main>
  );
}

export default App;

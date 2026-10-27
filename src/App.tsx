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
      <CollapsibleSection type="movie" title="Filmy" data={movies} />
      <hr />
      <CollapsibleSection type="book" title="Książki" data={books} />
      <hr />
      <CollapsibleSection type="album" title="Albumy i piosenki" data={albums} />
    </main>
  );
}

export default App;

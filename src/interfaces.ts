export interface CollapsibleSectionProps<Type extends BaseProps> {
  type: "movie" | "book" | "album"; // Typ sekcji
  title: string; // Tytuł sekcji
  data: Type[]; // Dane
  renderItem: (item: Type) => React.ReactNode; // Funkcja renderująca element
}

export interface BaseProps {
  source: string; // Ścieżka do pliku zdjęcia okładki
  title: string; // Tytuł
  releaseYear: number; // Rok wydania
}

export interface MovieProps extends BaseProps {
  rating: number; // Ocena filmu w skali od 1 do 10
}

export interface BookProps extends BaseProps {
  pages: number; // Ilość stron książki
}

export interface AlbumProps extends BaseProps {
  artist: string; // Nazwa wykonawcy albumu
  genre: string; // Gatunek albumu
  songs: {
    title: string; // Tytuł utworu
    duration: number; // Długość utworu w sekundach
  }[]; // Tablica obiektów piosenek
}

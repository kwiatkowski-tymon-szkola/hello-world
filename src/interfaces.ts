import type { ReactNode } from "react";

export interface CollapsibleSectionProps {
    type: string; // Typ sekcji
    title: string; // Tytuł sekcji
    children: ReactNode; // Wnętrze sekcji
}

export interface MovieProps {
    source: string; // Ścieżka do pliku zdjęcia okładki filmu
    title: string; // Tytuł filmu
    releaseYear: number; // Rok wydania filmu
    rating: number; // Ocena filmu w skali od 1 do 10
}

export interface BookProps {
    source: string; // Ścieżka do pliku zdjęcia okładki książki
    title: string; // Tytuł książki
    releaseYear: number; // Rok wydania książki
    pages: number; // Ilość stron książki
}

export interface AlbumProps {
    source: string; // Ścieżka do pliku zdjęcia okładki albumu
    title: string; // Tytuł albumu
    artist: string; // Nazwa wykonawcy albumu
    genre: string; // Gatunek albumu
    releaseYear: number; // Rok wydania albumu
    songs: {
        title: string; // Tytuł utworu
        duration: number; // Długość utworu w sekundach
    }[]; // Tablica obiektów piosenek
}

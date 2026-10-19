interface Props {
    source: string; // Ścieżka do pliku zdjęcia okładki książki
    title: string; // Tytuł książki
    releaseYear: number; // Rok wydania książki
    pages: number; // Ilość stron książki
}

function BookDisplay({ source, title, releaseYear, pages }: Props) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <p>Rok wydania: {releaseYear}</p>
                <p>{pages} stron</p>
            </div>
        </div>
    );
}

export default BookDisplay;

interface Props {
    source: string; // Ścieżka do pliku zdjęcia okładki filmu
    title: string; // Tytuł filmu
    releaseYear: number; // Rok wydania filmu
}

function MovieDisplay({ source, title, releaseYear }: Props) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <p>Rok wydania: {releaseYear}</p>
            </div>
        </div>
    );
}

export default MovieDisplay;

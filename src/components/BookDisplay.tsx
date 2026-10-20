import type { BookProps } from "../interfaces";

function BookDisplay({ source, title, releaseYear, pages }: BookProps) {
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

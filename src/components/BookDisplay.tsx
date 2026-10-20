import type { BookProps } from "../interfaces";

function BookDisplay({ source, title, releaseYear, pages }: BookProps) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <div>
                    <p>Rok wydania: {releaseYear}</p>
                    <p>{pages} stron</p>
                    {releaseYear < 2000 ? (
                        <h3 className="red-label">Klasyka</h3>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default BookDisplay;

import type { BookProps } from "../interfaces";

function BookDisplay({ source, title, releaseYear, pages }: BookProps) {
    return (
        <div>
            <img src={source} alt={title} className="vw-20" />
            <div>
                <h1>{title}</h1>
                <div>
                    <p>Rok wydania: {releaseYear}</p>
                    <p>{pages} stron</p>
                    {releaseYear < 2000 ? (
                        <p className="fs-5 text-danger fw-bold fst-italic">Klasyka</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default BookDisplay;

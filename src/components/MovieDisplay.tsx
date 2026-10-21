import type { MovieProps } from "../interfaces";

function MovieDisplay({ source, title, releaseYear, rating }: MovieProps) {
    return (
        <div>
            <img src={source} alt={title} className="vw-20" />
            <div>
                <h1>{title}</h1>
                <div>
                    <p>Rok wydania: {releaseYear}</p>
                    <p>Ocena: {rating}/10</p>
                    {rating >= 8 ? (
                        <p className="fs-5 text-danger fw-bold fst-italic">Polecany</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default MovieDisplay;

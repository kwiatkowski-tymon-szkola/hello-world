import type { MovieProps } from "../interfaces";

function MovieDisplay({ source, title, releaseYear, rating }: MovieProps) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <div>
                    <p>Rok wydania: {releaseYear}</p>
                    <p>Ocena: {rating}/10</p>
                    {rating >= 8 ? (
                        <h3 className="red-label">Polecany</h3>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default MovieDisplay;

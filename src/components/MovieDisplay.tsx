import type { MovieProps } from "../interfaces";

function MovieDisplay({ source, title, releaseYear }: MovieProps) {
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

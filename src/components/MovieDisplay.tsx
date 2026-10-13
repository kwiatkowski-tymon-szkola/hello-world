interface Props {
    source: string
    title: string
    releaseYear: number
}

function MovieDisplay({source, title, releaseYear}: Props) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <p>Rok wydania: {releaseYear}</p>
            </div>            
        </div>
    )
}

export default MovieDisplay
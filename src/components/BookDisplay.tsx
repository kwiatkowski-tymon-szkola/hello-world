interface Props {
    source: string
    title: string
    releaseYear: number
    pages: number
}

function BookDisplay({source, title, releaseYear, pages}: Props) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <p>Rok wydania: {releaseYear}</p>
                <p>{pages} stron</p>
            </div>            
        </div>
    )
}

export default BookDisplay
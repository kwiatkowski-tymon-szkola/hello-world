import type { BookProps } from "../interfaces";

function BookDisplay({ source, title, releaseYear, pages }: BookProps) {
  return (
    <div className="card h-100 p-2">
      <img src={source} alt={title} className="card-img-top" />
      <div className="card-body">
        <h1 className="card-title h1">{title}</h1>
        <p className="card-text mb-1">Rok wydania: {releaseYear}</p>
        <p className="card-text">{pages} stron</p>
        {releaseYear < 2000 ? (
          <p className="badge text-bg-success">Klasyka</p>
        ) : null}
      </div>
    </div>
  );
}

export default BookDisplay;

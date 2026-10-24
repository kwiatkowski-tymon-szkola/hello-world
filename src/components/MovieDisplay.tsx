import type { MovieProps } from '../interfaces';

function MovieDisplay({ source, title, releaseYear, rating }: MovieProps) {
	return (
		<div
			className="card h-100 p-2"
			onClick={() => console.log(`Wybrano film: ${title}`)}
		>
			<img src={source} alt={title} className="card-img-top" />
			<div>
				<div className="card-body">
					<h1 className="card-title h1">{title}</h1>
					<p className="card-text mb-1">
						Rok premiery: {releaseYear}
					</p>
					<button
						type="button"
						className="btn btn-outline-info mb-1"
						onClick={(e) => {
							e.stopPropagation();
							console.log(`Pokaż szczegóły dla ${title}`);
						}}
					>
						Pokaż szczegóły
					</button>
					<br />
					{rating >= 8 ? (
						<p className="badge text-bg-success">Polecany</p>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default MovieDisplay;

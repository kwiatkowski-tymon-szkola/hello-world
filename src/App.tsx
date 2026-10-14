import MovieDisplay from "./components/MovieDisplay"
import BookDisplay from "./components/BookDisplay"
import AlbumDisplay from "./components/AlbumDisplay"

function App(){
	return (
		<main>
			<MovieDisplay source="/movies/star_wars_2.jpg" title="Star Wars 2" releaseYear={2002}/>
			<MovieDisplay source="/movies/star_wars_3.jpg" title="Star Wars 3" releaseYear={2005}/>
			<MovieDisplay source="/movies/star_wars_4.jpg" title="Star Wars 4" releaseYear={1977}/>
			<hr />
			<BookDisplay source="/books/harry_potter_1.jpg" title="Harry Potter 1" releaseYear={1997} pages={328}/>
			<BookDisplay source="/books/harry_potter_2.jpg" title="Harry Potter 2" releaseYear={1998} pages={278}/>
			<BookDisplay source="/books/harry_potter_3.jpg" title="Harry Potter 3" releaseYear={2001} pages={306}/>
			<hr />
			<AlbumDisplay source="/albums/get_rich_or_die_tryin.jpg" title="Get Rich or Die Tryin'" artist="50 Cent" genre="Hip-hop / Gangsta rap" releaseYear={2002}
				songs={[{title: "What up gangsta", duration: 179}, {title: "Patiently Waiting", duration: 288}, {title: "Many Men (Wish Death)", duration: 256}]}/>
			<AlbumDisplay source="/albums/the_massacre.jpg" title="The Massacre" artist="50 Cent" genre="Hip-hop / Gangsta rap" releaseYear={2005} 
				songs={[{title: "In My Hood", duration: 231}, {title: "	This Is 50", duration: 184}, {title: "I'm Supposed To Die Tonight", duration: 231}]}/>		
		</main>
	)
}

export default App
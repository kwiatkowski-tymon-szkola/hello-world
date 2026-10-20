import type { MovieProps, BookProps, AlbumProps } from "./interfaces";

export const movies: MovieProps[] = [
    {
        source: "/movies/star_wars_3.jpg",
        title: "Star Wars 3",
        releaseYear: 2005,
        rating: 10,
    },
    {
        source: "/movies/star_wars_4.jpg",
        title: "Star Wars 4",
        releaseYear: 1977,
        rating: 8,
    },
    {
        source: "/movies/star_wars_2.jpg",
        title: "Star Wars 2",
        releaseYear: 2002,
        rating: 9,
    },
    {
        source: "/movies/star_wars_7.jpg",
        title: "Star Wars 7",
        releaseYear: 2015,
        rating: 7,
    },
];

export const books: BookProps[] = [
    {
        source: "/books/harry_potter_1.jpg",
        title: "Harry Potter 1",
        releaseYear: 1997,
        pages: 328,
    },
    {
        source: "/books/harry_potter_2.jpg",
        title: "Harry Potter 2",
        releaseYear: 1998,
        pages: 278,
    },
    {
        source: "/books/harry_potter_3.jpg",
        title: "Harry Potter 3",
        releaseYear: 2001,
        pages: 306,
    },
];

export const albums: AlbumProps[] = [
    {
        source: "/albums/get_rich_or_die_tryin.jpg",
        title: "Get Rich or Die Tryin'",
        artist: "50 Cent",
        genre: "Hip-hop / Gangsta rap",
        releaseYear: 2002,
        songs: [
            { title: "What up gangsta", duration: 179 },
            { title: "Patiently Waiting", duration: 288 },
            { title: "Many Men (Wish Death)", duration: 256 },
        ],
    },
    {
        source: "/albums/the_massacre.jpg",
        title: "The Massacre",
        artist: "50 Cent",
        genre: "Hip-hop / Gangsta rap",
        releaseYear: 2005,
        songs: [
            { title: "In My Hood", duration: 231 },
            { title: "This Is 50", duration: 184 },
            { title: "I'm Supposed To Die Tonight", duration: 231 },
            { title: "Piggy Bank", duration: 255 },
        ],
    },
    {
        source: "/albums/before_i_self_destruct.jpg",
        title: "Before I Self Destruct",
        artist: "50 Cent",
        genre: "hardcore hip hop / Gangsta rap",
        releaseYear: 2009,
        songs: [
            { title: "The Invitation", duration: 174 },
            { title: "Then Days Went By", duration: 224 },
            { title: "Death to My Enemies", duration: 226 },
            { title: "So Disrespectful", duration: 219 },
        ],
    },
    {
        source: "/albums/the_big_10.jpg",
        title: "The Big 10",
        artist: "50 Cent",
        genre: "East Coast hip hop / hardcore hip hop / gangsta rap",
        releaseYear: 2011,
        songs: [],
    },
];

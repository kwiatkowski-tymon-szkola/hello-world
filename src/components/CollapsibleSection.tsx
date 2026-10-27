import { useState } from "react";

import MovieDisplay from "./MovieDisplay";
import BookDisplay from "./BookDisplay";
import AlbumDisplay from "./AlbumDisplay";

import type { CollapsibleSectionProps, MovieProps, BookProps, AlbumProps } from "../interfaces";

function CollapsibleSection<T extends { title: string }>({
  type,
  title,
  data
}: CollapsibleSectionProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <section>
      <h1 className="display-6 fw-semibold" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "⏷" : "⏵"}
        {title}
      </h1>

      {isOpen ? (
        <div>
          <div className="row g-1 align-items-center">
            <div className="col-auto">
              <input
                id={type + "-search"}
                type="text"
                className="form-control form-control-lg mb-2 col-auto"
                placeholder="Wpisz tytuł"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  console.log(event.target.value);
                }}
              />
            </div>
            <div className="col-auto p2 fs-4">
              <span>Filtrowanie: </span>
              {search ? (
                <span className="text-primary">{search}</span>
              ) : (
                <span className="text-danger">Brak</span>
              )}
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            {
              data.map((item) => {
                if (item.title.toLowerCase().includes(search.toLowerCase())) {
                  switch (type) {
                    case "movie":
                      return <MovieDisplay key={item.title} {...(item as unknown as MovieProps)} />;
                    case "book":
                      return <BookDisplay key={item.title} {...(item as unknown as BookProps)} />;
                    case "album":
                      return <AlbumDisplay key={item.title} {...(item as unknown as AlbumProps)} />;
                  }
                }
              })
            }
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default CollapsibleSection;

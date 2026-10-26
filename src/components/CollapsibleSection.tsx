import { useState } from "react";

import type { CollapsibleSectionProps } from "../interfaces";

function CollapsibleSection({
  type,
  title,
  children,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(true);
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
            {children}
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default CollapsibleSection;

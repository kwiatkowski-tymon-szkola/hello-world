import { useState } from "react";

import type { CollapsibleSectionProps } from "../interfaces";

function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section>
            <h1
                className="list-header display-6 fw-semibold"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? "⏷" : "⏵"}
                {title}
            </h1>
            {isOpen ? (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                    {children}
                </div>
            ) : null}
        </section>
    );
}

export default CollapsibleSection;

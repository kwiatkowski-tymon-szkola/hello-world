import { useState } from "react";

import type { CollapsibleSectionProps } from "../interfaces";

function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section>
            <h1 className="list-header" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "⏷" : "⏵"}
                {title}
            </h1>
            {isOpen ? <div className="element-list">{children}</div> : null}
        </section>
    );
}

export default CollapsibleSection;

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [hidden, setHidden] = useState<boolean>(false);

    function flipHidden(): void {
        setHidden(!hidden);
    }

    return (
        <div>
            <Button onClick={flipHidden}>Reveal Answer</Button>
            {hidden && <div>42</div>}
        </div>
    );
}

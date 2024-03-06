import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    function flipVisibility(): void {
        setIsVisible(!isVisible);
    }
    return (
        <div>
            <Button onClick={flipVisibility}>Reveal Answer</Button>

            {}
            {isVisible && <p>The answer is: 42</p>}
        </div>
    );
}

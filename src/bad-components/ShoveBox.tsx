import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({
    position,
    setPosition
}: {
    position: number;
    setPosition: (newPosition: number) => void;
}) {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

function MoveableBox({ position }: { position: number }): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px" // Keep the value as a string
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [boxPosition, setBoxPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {boxPosition}</span>
            <div>
                <ShoveBoxButton
                    position={boxPosition}
                    setPosition={setBoxPosition}
                ></ShoveBoxButton>
                <MoveableBox position={boxPosition} />
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({
    onColorChange
}: {
    onColorChange: () => void;
}): JSX.Element {
    return <Button onClick={onColorChange}>Next Color</Button>;
}

function ColorPreview(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const handleColorChange = () => {
        setColorIndex((1 + colorIndex) % COLORS.length);
    };

    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        >
            <ChangeColor onColorChange={handleColorChange} />
        </div>
    );
}

export function ColoredBox(): JSX.Element {
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ColorPreview />
            </div>
        </div>
    );
}

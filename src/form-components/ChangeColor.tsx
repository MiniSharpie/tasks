import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const COLORS = [
    "red",
    "blue",
    "green",
    "black",
    "orange",
    "pink",
    "purple",
    "cyan"
];
export function ChangeColor(): JSX.Element {
    const [allColors] = useState<string[]>(COLORS);
    const [aColor, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {allColors.map((color: string) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-pick"
                    label={color}
                    value={color}
                    checked={aColor === color}
                    style={{ backgroundColor: color }}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: aColor }}
                    data-testid="colored-box"
                >
                    {aColor}
                </span>
            </div>
        </div>
    );
}

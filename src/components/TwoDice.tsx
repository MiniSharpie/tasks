import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left_die, setDie1] = useState<number>(1);
    const [right_die, setDie2] = useState<number>(2);

    function isWin(): boolean {
        if (left_die === right_die && left_die != 1) {
            return true;
        } else {
            return false;
        }
    }
    function isLoss(): boolean {
        if (right_die === 1 && left_die === 1) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div>
            <span>
                Left die:<span data-testid="left-die">{left_die}</span>
            </span>
            <span>
                Right die:<span data-testid="right-die">{right_die}</span>
            </span>
            <Button onClick={() => setDie1(d6())}>Roll Left</Button>
            <Button onClick={() => setDie2(d6())}>Roll Right</Button>
            <div>
                {isLoss() ? (
                    <span> You Lose</span>
                ) : isWin() ? (
                    <span>You Win</span>
                ) : null}
            </div>
        </div>
    );
}

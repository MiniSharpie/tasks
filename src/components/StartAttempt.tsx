import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <span>
                <Button
                    onClick={startQuiz}
                    disabled={attempts === 0 || inProgress}
                >
                    Start Quiz
                </Button>
                Attempts left: {attempts}.
            </span>
            <span>
                <Button
                    onClick={() => setInProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
            </span>
            <div>
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    function isRight(answer: string): string {
        if (answer === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formUserAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={userAnswer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            <div>
                Answer: <span>{isRight(userAnswer)}</span>
            </div>
        </div>
    );
}

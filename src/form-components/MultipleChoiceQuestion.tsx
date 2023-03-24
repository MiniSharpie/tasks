import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userChoice, setUserChoice] = useState<string>(options[0]);

    function isAnswer(answer: string): string {
        if (answer === expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setUserChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="pick-option">
                <Form.Label>Pick an Option:</Form.Label>
                <Form.Select value={userChoice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>Your answer is: {isAnswer(userChoice)}</div>
        </div>
    );
}

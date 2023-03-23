import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [addedAttempts, setAddedAttempts] = useState<string>("0");
    const numAddedAttempts = parseInt(addedAttempts) || 0;

    function updateAddedAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setAddedAttempts(event.target.value);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts to Add:</Form.Label>
                <Form.Control
                    type="number"
                    value={addedAttempts}
                    onChange={updateAddedAttempts}
                ></Form.Control>
            </Form.Group>
            <div>
                <span>Attempts Remaining: {attempts}</span>
            </div>
            <div>
                <Button
                    onClick={() => setAttempts(attempts + numAddedAttempts)}
                >
                    gain
                </Button>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts === 0}
                >
                    use
                </Button>
            </div>
        </div>
    );
}

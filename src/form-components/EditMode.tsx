import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function isAStudent(studentName: string, student: boolean): string {
        if (student) {
            return studentName + " is a student";
        } else {
            return studentName + " is not a student";
        }
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group controlId="formStudentName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    value={name}
                    onChange={updateName}
                    hidden={!editMode}
                />
            </Form.Group>
            <div>
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Student?"
                    checked={isStudent}
                    onChange={updateIsStudent}
                    hidden={!editMode}
                />
            </div>
            <div>
                <span>{isAStudent(name, isStudent)}</span>
            </div>
            <div>
                <Form.Check
                    type="switch"
                    id="is-Edit-Mode"
                    label="Edit?"
                    checked={editMode}
                    onChange={updateEditMode}
                />
            </div>
        </div>
    );
}

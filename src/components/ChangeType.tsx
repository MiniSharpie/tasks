import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questType, setQuestType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestionType(): void {
        setQuestType(
            questType === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    function whatQuestion(type: QuestionType): string {
        return type === "multiple_choice_question"
            ? "Multiple Choice"
            : "Short Answer";
    }
    return (
        <div>
            <div>
                Current Question: <span>{whatQuestion(questType)}</span>
                <Button onClick={changeQuestionType}>Change Type</Button>
            </div>
        </div>
    );
}

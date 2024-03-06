import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    type QuestionType = "multiple_choice_question" | "short_answer_question";

    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );
    const changeType = () => {
        setQuestionType(
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };

    return (
        <div>
            <button onClick={changeType}>Change Type</button>

            {questionType === "multiple_choice_question" && (
                <p>Multiple Choice</p>
            )}
            {questionType === "short_answer_question" && <p>Short Answer</p>}
        </div>
    );

    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 + value)}>Add One</Button>
            to {value}.
        </span>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "multiple_choice_question"
    );

    const handleChangeType = () => {
        const newType =
            questionType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question";
        setQuestionType(newType);
    };

    return (
        <div>
            <p>Current Question Type: {questionType}</p>
            <Button onClick={handleChangeType}>Change Type</Button>
        </div>
    );
}

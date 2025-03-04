import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

const Question = () => {
  const { questions, index, dispatch, answer } = useQuiz();

  if (!questions || questions.length === 0) return <p>Loading questions...</p>;

  const question = questions[index];

  return (
    <div>
      <h4>{question?.question || "No question available"}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;

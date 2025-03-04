import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const StartScreeen = () => {
  const { numQuestions, dispatch } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}>
        Lets start!!
      </button>
    </div>
  );
};

export default StartScreeen;

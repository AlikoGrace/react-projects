import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreeen from "./components/StartScreeen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishedScreen from "./components/FinishedScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { QuizProvider, useQuiz } from "./contexts/QuizContext";

const App = () => {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
};
// i needed the satus state but useQuiz cannot be directly used in our app so i had to create a new function ue it there then call it in app
const QuizContent = () => {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreeen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishedScreen />}
      </Main>
    </div>
  );
};

export default App;

import { useState, useCallback } from "react";

import QUESTIONS from '../questions';
import Question from "./Question";
import Summary from "./Summary";


export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handelSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer]
    });

  }, [])

  const handleSkipAnswer = useCallback(() => handelSelectAnswer(null), [handelSelectAnswer])

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />
  };



  return <div id="quiz">
    <div id="question">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handelSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  </div>
}
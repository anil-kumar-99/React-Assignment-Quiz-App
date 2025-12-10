import { useState, useEffect } from "react";

export function useQuiz(questions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = (selectedOption) => {
    if (questions[currentIndex].correctIndex === selectedOption) {
      setScore((prev) => prev + 1);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
  };

  return { currentIndex, score, nextQuestion, resetQuiz };
}

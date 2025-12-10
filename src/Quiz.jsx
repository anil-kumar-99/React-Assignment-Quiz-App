import { useState, useEffect } from "react";
import { useQuiz } from "./useQuiz";
import Result from "./Result";
import "./styles.css";

function Quiz({ questions }) {
  const { currentIndex, score, nextQuestion, resetQuiz } = useQuiz(questions);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (currentIndex >= questions.length) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer === 0) {
      handleSubmit(); // Auto submit on timeout
    }

    return () => clearInterval(interval);
  }, [timer]);

  if (currentIndex >= questions.length) {
    return (
      <Result score={score} total={questions.length} resetQuiz={resetQuiz} />
    );
  }

  const question = questions[currentIndex];

  const handleSubmit = () => {
    if (selectedOption === null) return; // User must choose
    nextQuestion(selectedOption);
    setSelectedOption(null);
    setTimer(30);
  };

  return (
    <div className="container">
      <div className="timer">⏳ Time Left: {timer}s</div>

      <div className="question">{question.question}</div>

      <ul className="options">
        {question.options.map((opt, idx) => (
          <li
            key={idx}
            className={selectedOption === idx ? "selected" : ""}
            onClick={() => setSelectedOption(idx)}
          >
            {opt}
          </li>
        ))}
      </ul>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Quiz;

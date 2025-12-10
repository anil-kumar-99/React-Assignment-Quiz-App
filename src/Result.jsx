import "./styles.css";

function Result({ score, total, resetQuiz }) {
  const percentage = ((score / total) * 100).toFixed(0);

  return (
    <div className="container result-box">
      <h2>🎉 Quiz Completed!</h2>
      <p>You scored <strong>{score}</strong> out of <strong>{total}</strong></p>
      <p>Percentage: <strong>{percentage}%</strong></p>

      <button className="restart-btn" onClick={resetQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;

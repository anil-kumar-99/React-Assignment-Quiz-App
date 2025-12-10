import { useState, useEffect } from "react";
import Quiz from "./Quiz";

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => {
        if (!res.ok) {
          throw new Error("API Error");
        }
        return res.json();
      })
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch questions");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return <Quiz questions={questions} />;
}

export default App;

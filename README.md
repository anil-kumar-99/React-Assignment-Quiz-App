A simple, interactive quiz application built with React and Vite, using JSON Server as a mock backend. Users answer multiple-choice questions under a time limit, see their results instantly, and can restart the quiz to try again.

**Features**

Fetches questions from a mock REST API using fetch.
Timer for each question (e.g., 30 seconds) with automatic submission on timeout.
Shows one question at a time and calculates the score at the end.
Submit button for manual answer submission.
Restart quiz functionality.
Clean, responsive UI using pure CSS. 
Implements React hooks (useState, useEffect, useMemo) and a custom hook for quiz logic.

**Project Structure**
timed-quiz-game/
│── src/
│   ├── App.jsx
│   ├── Quiz.jsx
│   ├── Result.jsx
│   ├── hooks/
│   │   └── useQuiz.js
│   ├── styles.css
│── db.json
│── package.json
│── README.md



**Install dependencies**
npm install
Start JSON Server 
npx json-server --watch db.json --port 4000
This serves your questions at http://localhost:4000/questions.

**Start the React app**
npm run dev

Open http://localhost:5173/ in your browser to see the app.

**How React Hooks Are Used**
-useState
To manage the current question index, selected option, score, and timer.

-useEffect
Fetches questions from the API when the app loads.
Handles timer countdown and cleanup when questions change.

-useMemo
Computes derived values like final percentage score efficiently.

-Custom Hook (useQuiz)
Encapsulates quiz logic: moving to the next question, updating score, and resetting the quiz.

import '../styles/quiz.css';
import MainMenu from './MainMenu';
import EndScreen from './EndScreen';
import Quiz from './Quiz';
import { useState } from 'react';
import { QuizContext } from './Contexts';

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Take a quiz to assess your learning</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endscreen" && <EndScreen />}
   </QuizContext.Provider>
    </div>
  );
}

export default App;
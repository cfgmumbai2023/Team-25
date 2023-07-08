import React from 'react'
import { useState } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import '../App.css';
function Quiz() {
const{ score, setScore, gameState, setGameState } = useContext(QuizContext);
const [currQs, setCurrQs] = useState(0);
const[optionChosen, setOptionChosen] = useState("");

const chooseOption = (option) => {
    setOptionChosen(option);
  };

const nextQuestion = () =>{
if(Questions[currQs].answer == optionChosen){
    setScore(score+1);
}
setCurrQs(currQs+1);
};
const finishQuiz = ()=>{
    if(Questions[currQs].answer == optionChosen){
        setScore(score+1);
    }
setGameState("endscreen");
};

return (
    <div className='Quiz'>
<h1>{Questions[currQs].prompt}</h1>
<div className='options'>
<button onClick={()=>{chooseOption("A")}}>{Questions[currQs].optionA}</button>
<button onClick={()=>{chooseOption("B")}}>{Questions[currQs].optionB}</button>
<button onClick={()=>{chooseOption("C")}}>{Questions[currQs].optionC}</button>
<button onClick={()=>{chooseOption("D")}}>{Questions[currQs].optionD}</button>
</div>
{currQs == Questions.length-1 ? (<button onClick={finishQuiz} id="nextQuestion">Finish Quiz</button>) 
:(
<button onClick={nextQuestion} id="nextQuestion">Next Question</button>
)
}
</div>
  );
}

export default Quiz;
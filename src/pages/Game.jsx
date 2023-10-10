import { useEffect, useState } from "react"
import Header from "../components/Header"
import questions from "../mock/questions";

function Game() {

  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const [isMarked, setIsMarked] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);

  useEffect(() => {
    setAllAnswers(questions)
  }, [])

  return (
    <div>
      <Header />
      <h1>Game</h1>
      <div>
        {answers.map((e) => {

          <button
          type="button"
          value={ e }
          disabled={ isDisabled }
          className={ isMarked && ((isMarked && (e === r[counter].correct_answer))
            ? 'correct__choice'
            : 'wrong__choice') }
          >{e}</button>
        })}
      </div>
    </div>
  )
}

export default Game

import { useEffect, useState } from "react"
import Header from "../components/Header"
import questions from "../mock/questions";
import shuffle from "../utils/shuffleArray";

function Game() {

  const [counter, setCounter] = useState(0);
  // const [timer, setTimer] = useState(30);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isMarked, setIsMarked] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  // const [answers, setAnswers] = useState([]);
  // const [wrongAnswers, setWrongAnswers] = useState([]);
  // const [isFinished, setIsFinished] = useState(false);
  const [allAnswers, setAllAnswers] = useState([]);

  useEffect(() => {
      setAllAnswers([])
      const allAnswersDefine = [questions[counter].correct_awnsner, questions[counter].wrong_awnsners[0],
      questions[counter].wrong_awnsners[1], questions[counter].wrong_awnsners[2]]
      const shuffleAnswers = shuffle(allAnswersDefine)
      setAllAnswers(shuffleAnswers)
  }, [counter])

  const nextQuestion = () => {
    setAllAnswers([])
    setCounter(counter + 1)
    setIsDisabled(false)
  }

  const questionMarked = () => {
    setIsDisabled(true)
  }

  return (
    <div>
      <Header />
      <h1>Game</h1>
      <div>
        {allAnswers.map((e) => (
          <button
            type="button"
            value={e}
            key={e + counter}
            disabled={isDisabled}
            onClick={questionMarked}
          // className={ isMarked && ((isMarked && (e === allAnswers[counter].correct_answer))
          //   ? 'correct__choice'
          //   : 'wrong__choice') }
          >{e}</button>
        ))}
      </div>
      <button
        onClick={nextQuestion}
        disabled={!isDisabled}
      >Proxima Pergunta</button>
    </div>
  )
}

export default Game

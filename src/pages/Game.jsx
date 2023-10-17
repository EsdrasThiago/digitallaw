import { useEffect, useState } from "react"
import Header from "../components/Header"
import questions from "../mock/questions";
import shuffle from "../utils/shuffleArray";

function Game() {

  const [counter, setCounter] = useState(0);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [fillPercentage, setFillPercentage] = useState(30);
  const [wrongCounter, setWrongCounter] = useState(0);
  const [timer, setTimer] = useState(30);
  // const [isLoading, setIsLoading] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  // const [answers, setAnswers] = useState([]);
  // const [wrongAnswers, setWrongAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [allAnswers, setAllAnswers] = useState([]);
  const [questionTitle, setQuestionTitle] = useState('');

  useEffect(() => {
    if (counter < questions.length) {
      setAllAnswers([])
      const allAnswersDefine = [questions[counter].correct_awnsner, ...questions[counter].wrong_awnsners]
      const shuffleAnswers = shuffle(allAnswersDefine)
      setQuestionTitle(questions[counter].question)
      setAllAnswers(shuffleAnswers)
    }
    if (counter >= questions.length) {
      setIsFinished(true);
    }
  }, [counter])

  const updateFill = () => {
    setFillPercentage((timer / 10) * 10);
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (isMarked) {
        setTimer(timer)
        clearInterval(countdown)
      }
      if (!isMarked) {
        if (timer > 0) {
          setTimer(timer - 1);
          updateFill();
        } else {
          setIsDisabled(true)
          setFillPercentage(-1)
          setIsMarked(true)
          setWrongCounter(counter + 1)
          clearInterval(countdown);
        }
      }
    }, 3000);

    return () => {
      clearInterval(countdown);
    };
  }, [timer, isMarked]);

  const nextQuestion = () => {
    setAllAnswers([])
    setCounter(counter + 1)
    setFillPercentage(30);
    setIsDisabled(false)
    setIsMarked(false)
    setTimer(30)
  }

  const questionMarked = ({ target }) => {
    const isCorrect = questions[counter].correct_awnsner === target.value;
    if (isCorrect) setCorrectCounter(correctCounter + 1)
    if (!isCorrect) setWrongCounter(wrongCounter + 1)
    setIsMarked(true);
    setIsDisabled(true)
  }

  return (
    <div>
      <Header />
      <div>
        {!isFinished && <h1>{questionTitle}</h1>}
        {isFinished ?
          (<div>
            <h1>Acertou: {correctCounter}</h1>
            <h1>Errou: {wrongCounter}</h1>
          </div>) :
          <div className="game__timer">
            <div className="main__game">
              <div className="questions__buttons">
                {allAnswers.map((e, i) => (
                  <button
                    type="button"
                    value={e}
                    key={e + i}
                    disabled={isDisabled}
                    onClick={questionMarked}
                    className={isMarked && ((e === questions[counter].correct_awnsner)
                      ? 'correct__choice'
                      : 'wrong__choice')}
                  >{e}</button>
                ))}
              </div>
              <button
                onClick={nextQuestion}
                disabled={!isDisabled}
              >Proxima Pergunta</button>
            </div>
            <div className="countdown">
              <div className="circle">
                <div
                  className="fill"
                  style={{
                    clipPath: `circle(${fillPercentage}%)`,
                  }}
                ></div>
                <div className="countdown-text">{timer}</div>
              </div>
            </div>
          </div>
        }
      </div>
      {/* {!isFinished &&
        
      } */}
      {!isFinished &&
        <div>

        </div>
      }
    </div>
  )
}

export default Game

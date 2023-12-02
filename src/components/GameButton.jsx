import { useNavigate } from "react-router-dom"

function GameButton() {

  const navigate = useNavigate()
  const quizButton = () => {
    navigate("/game")
  }

  return (
    <button className="quiz__button" onClick={quizButton}>Digitallaw Games</button>
  )
}

export default GameButton

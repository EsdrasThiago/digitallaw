import { useNavigate } from "react-router-dom"

function GameButton() {

  const navigate = useNavigate()
  const quizButton = () => {
    navigate("/game")
  }

  return (
    <button onClick={quizButton}>Jogar Quiz</button>
  )
}

export default GameButton

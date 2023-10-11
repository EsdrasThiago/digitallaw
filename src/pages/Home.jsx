import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

function Home() {

  const navigate = useNavigate()
  const quizButton = () => {
    navigate("/game")
  }

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <button onClick={quizButton}>Jogar Quiz</button>
    </div>
  )
}

export default Home

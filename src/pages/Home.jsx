import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
      <Footer />
    </div>
  )
}

export default Home

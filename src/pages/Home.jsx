
import Header from "../components/Header"
import Footer from "../components/Footer"
import GameButton from "../components/GameButton"
import { Link } from "react-router-dom"

function Home() {

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <Link to="icsm">
        <h2>PRINCIPAIS MUDANÇAS PROVOCADAS PELA EMENDA CONSTITUCIONAL 87/2015 REFERENTES AO DIFERENCIAL DE ALÍQUOTAS DO ICMS-DIFAL</h2>
      </Link>
      <GameButton />
      <Footer />
    </div>
  )
}

export default Home

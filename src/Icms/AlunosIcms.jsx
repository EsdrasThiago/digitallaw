import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import alunos from "../images/IMG-20231128-WA0023.webp"
import fileIcms from "../files/Modelo_Paper_-_Unidade_II_UFC_1.pdf"

function AlunosIcms() {

  return (
    <div className="box">
      <Header />
      <div className="main__icsm">
        <img src={alunos} alt="Alunos apresentando sobre ICMS" />
        <div className="quiz__button">
          <a href={fileIcms} download="Conteudo ICMS">
            <button>
              Baixar conteudo
            </button>
          </a>
        </div>
      </div>
      <Link to="/icsmmodulacao" className="left__button"><h2>Matéria Anterior</h2></Link>
      <Footer />
    </div>
  )
}

export default AlunosIcms

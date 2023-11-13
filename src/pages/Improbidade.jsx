import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import coordenadorIMG from "../images/coordenador.jpg";
import dilmaIMG from "../images/dilma-rousseff-129.webp";
import lulaIMG from "../images/LULA_OLINDA.jpg";
import nicolauIMG from "../images/NICOLAU.jpg"
import improbidadeIMG from "../images/improbidade.png"
import improbidadePrincipalIMG from "../images/improbidadePrincipal.avif"
import improbidadeIMG2 from "../images/improbidadeIMG2.webp"
import improbidadeIMG3 from "../images/improbidadeIMG3.jpg"

function Improbidade() {

  return (
    <div>
      <Header />
      <div className="flex">
        <Link to="/improbidadeadministrativa" className="icsm__link coming__class">
          <img src={improbidadePrincipalIMG} alt="Saco de dinheiro escrito ICMS"/>
          <h2>O que é improbidade administrativa?</h2>
        </Link>
        <Link to="/improbidadeadministrativa2" className="icsm__link coming__class">
          <img src={improbidadeIMG3} alt="Difal de ICMS: Empresas do Simples Nacional sao obrigadas a paga-lo?"/>
          <h2>Mudanças na Lei de Improbidade Administrativa após a vigência da lei 14.230/2021</h2>
        </Link>
        <Link to="/icsmmodulacao" className="icsm__link coming__class">
          <img src={improbidadeIMG} alt="Tabela de Improbidade" />
          <h2>O que acontece contra alguém que comete improbidade?</h2>
        </Link>
        <Link className="icsm__link coming__class">
          <img src={improbidadeIMG2} alt="Diversas pessoas"/>
          <h2>Quais as diferenças entre improbidade administrativa, corrupção e crimes contra a administração pública?</h2>
        </Link>
        <Link className="icsm__link coming__class">
          <img src={nicolauIMG} alt="Nicolau" />
          <h2>TRF-3 mantém condenação de ex-juiz Nicolau</h2>
        </Link>
        <Link className="icsm__link coming__class">
          <img src={lulaIMG} alt="Lula" />
          <h2>Ex-prefeita de Olinda Luciana Santos foi condenada por improbidade e ficou inelegível por 6 anos, diz TJPE</h2>
        </Link>
        <Link className="icsm__link coming__class">
          <img src={dilmaIMG} alt="Dilma" />
          <h2>Impeachment de Dilma Rousseff ocorreu em agosto de 2016</h2>
        </Link>
        <Link className="icsm__link coming__class">
          <img src={coordenadorIMG} alt="Coordenador" />
          <h2>Entrevista com o Especialista</h2>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Improbidade

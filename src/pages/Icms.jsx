import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import diferencialIMG from "../images/diferencialIMG.png";
import impactoIMG from "../images/impactosIMG.png"
import modulacaoIMG from "../images/modulacaoIMG.png"

function Icms() {

  return (
    <div>
      <Header />
      <div className="flex coming__class">
        <Link to="/icsmdiferencial" className="icsm__link">
          <img src={diferencialIMG} alt="Saco de dinheiro escrito ICMS"/>
          <h2>O QUE SERIA O DIFERENCIAL DE ALÍQUOTAS DO ICMS-DIFAL</h2>
        </Link>
        <Link to="/icsmimpactos" className="icsm__link">
          <img src={impactoIMG} alt="Difal de ICMS: Empresas do Simples Nacional sao obrigadas a paga-lo?"/>
          <h2>IMPACTOS NO SIMPLES NACIONAL</h2>
        </Link>
        <Link to="/icsmmodulacao" className="icsm__link">
          <img src={modulacaoIMG} alt="Diversas pessoas"/>
          <h2>MODULAÇÃO PROPOSTA PELO SUPERIOR TRIBUNAL FEDERAL REFERENTE AO JULGAMENTO DA AÇÃO DIRETA DE INCONSTITUCIONALIDADE A RESPEITO DESTA TEMÁTICA</h2>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Icms

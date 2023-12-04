import { Link } from "react-router-dom"
// import modulacaoIMG from "../images/modulacaoIMG.png"
// import impactoIMG from "../images/impactosIMG.png"
import diferencialIMG from "../images/diferencialIMG.png";

function IcsmLink() {
  return (
    <Link to="icsm" className="icsm__link">
        <img src={diferencialIMG} alt="Saco de dinheiro escrito ICMS"/>
        <h2>PRINCIPAIS MUDANÇAS PROVOCADAS PELA EMENDA CONSTITUCIONAL 87/2015 REFERENTES AO DIFERENCIAL DE ALÍQUOTAS DO ICMS-DIFAL</h2>
        {/* <img src={impactoIMG} alt="Difal de ICMS: Empresas do Simples Nacional sao obrigadas a paga-lo?"/> */}
        {/* <img src={modulacaoIMG} alt="Diversas pessoas"/> */}
      </Link>
  )
}

export default IcsmLink

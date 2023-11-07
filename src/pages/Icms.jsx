import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Icms() {

  return (
    <div>
      <Header />
      <Link to="/icsmdiferencial">
      <h2>O QUE SERIA O DIFERENCIAL DE ALÍQUOTAS DO ICMS-DIFAL</h2>
      </Link>
      <Link to="/icsmimpactos">
      <h2>IMPACTOS NO SIMPLES NACIONAL</h2>
      </Link>
      <Link to="/icsmmodulacao">
      <h2>MODULAÇÃO PROPOSTA PELO SUPERIOR TRIBUNAL FEDERAL REFERENTE AO JULGAMENTO DA AÇÃO DIRETA DE INCONSTITUCIONALIDADE A RESPEITO DESTA TEMÁTICA</h2>
      </Link>
      <Footer />
    </div>
  )
}

export default Icms

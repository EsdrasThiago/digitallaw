import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import impactoIMG from "../images/impactosIMG.png"

function ImprobidadeAdministrativaLei() {

  return (
    <div className="box">
      <Header />
      <div className="main__icsm">
      <img src={impactoIMG} alt="Difal de ICMS: Empresas do Simples Nacional sao obrigadas a paga-lo?"/>
      <p>O Simples Nacional é um regime unificado de recolhimento tributário aplicável às Microempresas e Empresas de Pequeno Porte.</p>
      <p>Ele surgiu visando reduzir a burocracia e os custos de pequenos empresários, criando um sistema unificado de recolhimento de
        tributos, simplificando declarações, entre outras facilidades, e desta forma, incentivar o empreendedorismo no país.</p>
      <p>Por ser um regime de tratamento tributário diferenciado e favorecido, com recolhimento unificado,
        o DIFAL já estaria incluso no cálculo, assim como outros impostos devidos.</p>
        </div>
        <Link to="/icsmdiferencial" className="left__button"><h2>Matéria Anterior</h2></Link>
        <Link to="/icsmmodulacao" className="right__button"><h2>Próxima Matéria</h2></Link>
      <Footer />
    </div>
  )
}

export default ImprobidadeAdministrativaLei

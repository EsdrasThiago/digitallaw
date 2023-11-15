// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import improbidadeIMG from "../images/improbidade.png"

function ImprobidadePenas() {

  return (
    <div>
      <Header />
      <div className="main__icsm">
        <img src={improbidadeIMG} alt="Saco de dinheiro escrito ICMS" />
        <p>
          Apesar de não estar no código penal, quem comete improbidade pode, sim, sofrer consequências.
          Pelo art. 37º da Constituição Federal, os condenados podem sofrer diversas consequências serem obrigados a ressarcir o dano e,
          até mesmo, suspensão dos direitos políticos. Variando conforme a extensão do ato e gravidade. Paralelo a isto,
          o órgão pode abrir um processo administrativo disciplinar - PAD contra o agente público.
        </p>
        <p>
          Por exemplo: o PAD tem o objetivo de apurar a conduta do agente e o grau de responsabilidade que ele tem.
          Portanto, lembre-se que existem casos em que cabe um processo criminal, o que acaba gerando outros desdobramentos.
        </p>
      </div>
      <Link to="/improbidadeadministrativa2" className="left__button"><h2>Matéria Anterior</h2></Link>
      <Link to="/improbidadediferenca" className="right__button"><h2>Próxima Matéria</h2></Link>
      <Footer />
    </div>
  )
}

export default ImprobidadePenas

import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import improbidadeIMG3 from "../images/improbidadeIMG3.jpg"

function ImprobidadeAdministrativaLei() {

  return (
    <div className="box">
      <Header />
      <div className="main__icsm">
      <img src={improbidadeIMG3} alt="Homens apertando as maos"/>
      <p>Portanto uma das mudanças marcantes referem-se à necessidade do dolo específico em qualquer caso, retirando a conduta culposa da figura típica prevista no art. 
        Lei da lei 8.429/1992. Também unificou o prazo prescricional em 8 anos pra qualquer caso, além de incluir de forma expressa o nepotismo como prática de improbidade administrativa, 
        por ferir claramente os preceitos constitucionais da moralidade e impessoalidade. Incluiu em alguns casos a possibilidade de interrupção da prescrição, 
        e restringiu o rol de propositura da ação penal, cabendo agora apenas ao ministério público. Por fim houve alteração nos prazos de suspenção dos direitos políticos, um agravamento.</p>
      <p>Essas alterações trazidas pela nova lei podem ser consideradas como uma resposta legislativa aos excessos verificados na apuração e punição dos desvios na administração pública.</p>
      <p>Podemos concluir, então, que elas buscam centrar esforços nos atos efetivamente graves, dolosos e de má-fé, 
        de forma a garantir a necessária segurança jurídica ao administrador público no desempenho de suas funções.</p>
        </div>
        <Link to="/improbidadeadministrativa" className="left__button"><h2>Matéria Anterior</h2></Link>
        <Link to="/improbidadepenas" className="right__button"><h2>Próxima Matéria</h2></Link>
      <Footer />
    </div>
  )
}

export default ImprobidadeAdministrativaLei

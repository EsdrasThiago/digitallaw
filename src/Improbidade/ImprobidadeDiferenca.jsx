// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import improbidadeIMG2 from "../images/improbidadeIMG2.webp"

function ImprobidadeDiferenca() {

  return (
    <div>
      <Header />
      <div className="main__icsm">
        <img src={improbidadeIMG2} alt="Martelo algemado" />
        <p>
        os crimes de responsabilidade não são crimes na acepção técnica do termo acima exposto, 
        visto que configuram infrações político-administrativas praticadas por pessoas que ocupam determinados cargos públicos. 
        Dessa forma, o agente, caso sofra condenação por um crime de responsabilidade, não será alvo de uma sanção penal, 
        como uma pena privativa de liberdade, mas sim de sanções político-administrativas, como a perda do cargo, comumente chamado de impeachment, 
        e a inabilitação para o exercício de função pública. somente podem ter como sujeito ativo alguns agentes públicos específicos, 
        como Presidente da República, os Ministros de Estado, os Governadores e seus Secretários, os Ministros do Supremo Tribunal Federal, 
        o Procurador-Geral da República e os Prefeitos. Nos casos de improbidade administrativa. Percebe-se um rol amplo em relação ao sujeito ativo, 
        assim como o foro por prerrogativa de função, que é evidenciado nos crimes de responsabilidade, 
        onde também possui um procedimento especial e próprio. 
        O rol de condutas que ensejam a tipificação da improbidade administrativa se difere do rol dos crimes de responsabilidade, 
        embora em alguns aspectos se assemelhem, 
        como a possibilidade da ocorrência do crime de responsabilidade por não observar a probidade administrativa. 
        Ambos os ilícitos possuem natureza civil, ou político administrativa, 
        embora seja usada a terminologia crime de responsabilidade de maneira errônea por não se tratar de fato amparado pela esfera penal. 
        Ambos não excluem a possibilidade de responsabilização em outras searas, como no direito penal, ou de maneira administrativa.
        </p>
      </div>
      <Link to="/improbidadepenas" className="left__button"><h2>Matéria Anterior</h2></Link>
      <Link to="/improbidadenicolau" className="right__button"><h2>Próxima Matéria</h2></Link>
      <Footer />
    </div>
  )
}

export default ImprobidadeDiferenca

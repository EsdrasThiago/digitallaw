import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import GameButton from "../components/GameButton"
import Header from "../components/Header"
import modulacaoIMG from "../images/modulacaoIMG.png"

function ModulacaoProposta() {

  return (
    <div>
      <Header />
      <div className="main__icsm">
      <img src={modulacaoIMG} alt="Diversas pessoas"/>
      <h1>DECISÃO</h1>
      <p>O Plenário do Supremo Tribunal Federal (STF),em 21 de fevereiro de 2021,julgou inconstitucional a
        cobrança do Diferencial de Alíquota do Imposto sobre Circulação de Mercadorias e Serviços (Difal/ICMS),
        introduzida pela Emenda Constitucional (EC) 87/2015, sem a edição de lei complementar para disciplinar esse mecanismo de compensação.
        A matéria foi discutida no julgamento conjunto do Recurso Extraordinário (RE) 1287019, com repercussão geral (Tema 1093),
        e da Ação Direta de Inconstitucionalidade (ADI) 5469. Ao final do julgamento, os ministros decidiram que a decisão produzirá efeitos
        apenas a partir de 2022, dando oportunidade ao Congresso Nacional para que edite lei complementar sobre a questão.</p>
      <h1>MODULAÇÃO DOS EFEITOS </h1>
      <p>Os ministros aprovaram, por nove votos a dois, a modulação de efeitos para que a decisão, nos dois processos,
        produza efeitos a partir de 2022, exercício financeiro seguinte à data do julgamento, ou seja,
        as cláusulas continuam em vigência até dezembro de 2021, exceto em relação à cláusula 9ª,
        em que o efeito retroage a fevereiro de 2016, quando foi deferida, em medida cautelar na ADI 5464,
        sua suspensão. Segundo o ministro Dias Toffoli, autor da proposta de modulação, a medida é necessária para evitar insegurança jurídica,
        em razão da ausência de norma que poderia gerar prejuízos aos estados. O ministro salientou que,
        durante esse período, o Congresso Nacional terá possibilidade de aprovar lei sobre o tema.
        Ficam afastadas da modulação as ações judiciais em curso sobre a questão.</p>
      <GameButton />
      </div>
      <Link to="/icsmimpactos" className="left__button"><h2>Matéria Anterior</h2></Link>
      <Footer />
    </div>
  )
}

export default ModulacaoProposta

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import nicolauIMG from "../images/NICOLAU.jpg"

function ImprobidadeNicolau() {

  return (
    <div>
      <Header />
      <div className="main__icsm">
        <img src={nicolauIMG} alt="Nicolau" />
        <p>
          A 3ª Turma do Tribunal Regional Federal da 3ª Região confirmou a condenação do ex-juiz Nicolau dos Santos Neto,
          pelo desvio de quase R$ 170 milhões da construção do Fórum Trabalhista de São Paulo.
        </p>
        <p>
          desembargadores analisaram duas ações civis públicas por improbidade administrativa contra o réu,
          que terá de ressarcir os cofres públicos e pagar multa civil e danos morais.
        </p>
        <p>
          A construção do Fórum Trabalhista de São Paulo gerou desembolsos de R$ 235 milhões dos cofres públicos.
          De acordo com a prova pericial, porém, as obras somaram R$ 66 milhões,
          além do valor utilizado para a aquisição do terreno em que foi erguido o prédio. Em 2001,
          o Tribunal de Contas da União confirmou o desvio de R$ 170 milhões, em valores da época. Atualizado,
          o montante desviado supera R$ 1 bilhão.
        </p>
      </div>
      <Link to="/improbidadediferenca" className="left__button"><h2>Matéria Anterior</h2></Link>
      <Link to="/improbidadelula" className="right__button"><h2>Próxima Matéria</h2></Link>
      <Footer />
    </div>
  )
}

export default ImprobidadeNicolau

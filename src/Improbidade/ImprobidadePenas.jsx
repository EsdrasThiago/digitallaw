// import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import diferencialIMG from "../images/diferencialIMG.png";

function ImprobidadePenas() {

  return (
    <div>
      <Header />
      <div className="main__icsm">
      <img src={diferencialIMG} alt="Saco de dinheiro escrito ICMS"/>
      <p>
        No dia 16/04/2015 foi promulgada a Emenda Constitucional n° 87 de 2015,
        que alterou a sistemática de cobrança do ICMS nas operações interestaduais
        destinadas a não-contribuintes do imposto.
      </p>
      <p>
        Trazendo para a prática,
        vamos imaginar uma loja virtual de calçados, localizada no nosso estado (Bahia),
        que vende um par de tênis para uma pessoa física localizada no Estado do Rio de Janeiro
        por R$100,00. Pela sistemática antiga, deveríamos utilizar a alíquota interna do Estado
        da Bahia (19%) e a totalidade do imposto iria para Ba (0,19x R$ 100,00 = 19,00).
      </p>
      <p>
        Como podemos verificar, esta sistemática beneficiava os Estados remetentes,
        pois acabavam recebendo todo o ICMS das operações interestaduais destinadas
        a não-contribuintes.
      </p>
      </div>
      {/* <Link to="/icsmimpactos" className="right__button"><h2>Próxima Matéria</h2></Link> */}
      <Footer />
    </div>
  )
}

export default ImprobidadePenas

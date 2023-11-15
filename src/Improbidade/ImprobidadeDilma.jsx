import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import dilmaIMG from "../images/dilma-rousseff-129.webp";

function ImprobidadeDilma() {

  return (
    <div>
      <Header />
      <div className="main__icsm">
        <img src={dilmaIMG} alt="Dilma" />
        <p>
          Dilma foi afastada pelo Senado sob acusação de crime de responsabilidade fiscal.
          Os autores do pedido de afastamento de Dilma Rousseff alegaram que ela maquiou as contas públicas e desrespeitou a lei orçamentária durante a campanha eleitoral.
          O objetivo seria dar uma falsa sensação de segurança à economia e garantir a reeleição em 2014.
          As manobras foram batizadas de "pedaladas fiscais" em uma alusão à atividade física preferida da política.
          Ela costumava andar de bicicleta nas horas de folga. E a palavra "pedalar" usada de maneira vulgar quer dizer "enganar".
          O resultado do julgamento feito pelo senado resultou na perda do cargo de presidência da República,
          todavia não houve a inabilitação para exercer um novo vínculo com a administração pública.
        </p>
      </div>
      <Link to="/improbidadelula" className="left__button"><h2>Matéria Anterior</h2></Link>
      <Link to="/improbidadeespecialista" className="right__button"><h2>Próxima Matéria</h2></Link>
      <Footer />
    </div>
  )
}

export default ImprobidadeDilma

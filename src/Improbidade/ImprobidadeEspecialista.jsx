import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import coordenadorIMG from "../images/coordenador.jpg";

function ImprobidadeEspecialista() {

  return (
    <div>
      <Header />
      <div className="main__icsm">
        <img src={coordenadorIMG} alt="Especialista" />
        <p className="specialist__title">Dr.Jardel Alencar Machado Advogado, Pós Graduado em Direito Público, Assessor Jurídico Municipal, Membro da Comissão de Juizados Especiais OAB/BA, Professor Universitário. Ex – Presidente do Conselhos de Execuções Penais de Barreiras Bahia TJBA, Ex – Diretor de Relações Institucionais CCJA da OAB subseção Barreiras Bahia.</p>
        <p>
          Quando pensamos em um dos males que assolam a Administração Pública, a Improbidade Administrativa se sobressai,
          não pelo conceito purista do termo, mas pela fragilidade da moralidade humana quando posta em “xeque” no decurso dos impulsos indispensáveis para a movimentação da máquina Administrativa.
        </p>
        <p>
          A Improbidade Administrativa representa uma grave violação dos princípios éticos e legais que regem a administração pública.
          Seus efeitos nocivos comprometem o desenvolvimento e a confiança da sociedade nas instituições governamentais.
        </p>
        <p>
          Trata-se da responsabilidade moral dos agentes públicos em todos os seus atos,
          mesmo quando a tal ilicitude oferece alguns benefícios para a população. Em outras palavras,
          o cenário público se cobre pelo manto da generosidade administrativa,
          onde recursos e benfeitorias públicas são facilmente garantidos para aqueles que se curvam aos mandamentos do sistema ímprobo.
        </p>
        <p>
          No momento, ainda não há escapatória, o sistema confronta a moralidade pública e, por isso,
          a Lei de Improbidade Administrativa jamais será suficiente para reverter o quadro na sua totalidade.
          É necessário que além da atuação repressiva da lei em conjunto com o judiciário,
          haja também uma iniciativa preventiva para nutrir e conservar a probidade daqueles que almejam contribuir com os serviços públicos,
          sendo imperioso a atuação de um sistema de justiça imparcial, fiscalização rigorosa e o engajamento da população.
        </p>
        <p>
          Diante deste cenário, mesmo com os atos repressivos do Estado,
          resta notório a dificuldade de a moralidade administrativa receber seu devido destaque,
          visto que em determinas situações, sua simples existência pode dificultar ou até mesmo inibir totalmente recursos,
          emendas e diversos benefícios para a população.
        </p>
        <p>
          Por isso, a Administração Pública enfrenta o grande desafio da “busca pela probidade”,
          onde as raízes da desonestidade se enraizaram com o tempo em virtude da cultura,
          dos costumes e da distorcida visão do que seriam políticas públicas, estas,
          astuciosamente interpretadas como políticas “negociáveis”.
        </p>
      </div>
      <Link to="/improbidadedilma" className="left__button"><h2>Matéria Anterior</h2></Link>
      <Footer />
    </div>
  )
}

export default ImprobidadeEspecialista

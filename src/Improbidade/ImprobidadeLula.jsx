import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import lulaIMG from "../images/LULA_OLINDA.jpg";

function ImprobidadeLula() {

  return (
    <div>
      <Header />
      <div className="main__icsm">
        <img src={lulaIMG} alt="Lula" />
        <p>
          Luciana Santos foi prefeita em Olinda no ano de 2001-2008,
          a ex-prefeita fazia parte do partido (PC do B) quando condenada pelo Tribunal de Justiça de Pernambuco (TJPE) por improbidade administrativa.
          Por isso, segundo o Tribunal, ela ficou inelegível por seis anos.Além disso, ela foi multada em cinco vezes o salário que recebia como prefeita.
          Tendo em vista que a improbidade administrativa se refere às condutas consideradas desonestas que podem variar desde o uso indevido de recursos públicos até o favorecimento ilícito de empresas e indivíduos em licitações e contratos.
          Também se incluem nessa lista a nomeação de familiares para cargos públicos, ou seja, o nepotismo. Além disso,
          o tráfico de influência e o desvio de finalidade na aplicação de recursos públicos.
          O processo julgado em 2004 ainda cabia recurso, diz respeito ao gerenciamento do parque Energético e de iluminação da cidade,
          região metropolitana de Recife , o valor do contrato foi de R$7,3 milhões. Sendo alegado nos autos,
          a forma contratual firmada de forma fraudulenta com a empresa Citeluz Serviços de iluminação Urbana LTDA.
          A decisão foi proferida na 1ª Vara da Fazenda Pública de Olinda. O processo incluiu, além da ex-prefeita e da empresa,
          cinco servidores municipais. Eles foram condenados a perder os direitos políticos por cinco anos.
          A ex-secretária de Obras do município Hilda Wanderley Gomes também sofreu condenação. Assim como Luciana Santos,
          ela deverá passar seis anos sem os direitos políticos. Atualmente Luciana Santos foi escolhida para chefiar o Ministério da Ciência,
          Tecnologia e Inovações no governo Luís Inácio da Silva em dezembro de 2022 Luciana é a primeira mulher a ocupar o posto.
        </p>
      </div>
      <Link to="/improbidadenicolau" className="left__button"><h2>Matéria Anterior</h2></Link>
      <Link to="/improbidadedilma" className="right__button"><h2>Próxima Matéria</h2></Link>
      <Footer />
    </div>
  )
}

export default ImprobidadeLula

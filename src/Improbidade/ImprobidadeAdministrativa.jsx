import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"
import improbidadePrincipalIMG from "../images/improbidadePrincipal.avif"

function ImprobidadeAdministrativa() {

  return (
    <div>
      <Header />
      <div className="main__icsm">
        <img src={improbidadePrincipalIMG} alt="Imagem principal" />
        <p>
          A improbidade administrativa é uma imoralidade qualificada pela desonestidade.
          É um ato imoral, mas, além disso, tem uma inclinação ainda maior para a desonestidade,
          a má-fé do agente público.
        </p>
        <h2>Fundamento Constitucional</h2>
        <p>
          A ação de improbidade tem fundamento constitucional no art. 37, § 4º, da CF/1988:
          Os atos de improbidade administrativa importarão a suspensão dos direitos políticos,
          a perda da função pública, a indisponibilidade dos bens e o ressarcimento ao erário,
          na forma e gradação previstas em lei, sem prejuízo da ação penal cabível.
        </p>
        <p>
          A Constituição prevê quatro consequências para aqueles que praticarem ato de improbidade:
        </p>
        <ol>
          <li>Suspensão dos direitos políticos: É a incapacidade temporária de se exercer os direitos políticos previstos na Constituição.
            Cuidado! Não pode haver cassação dos direitos políticos (art. 15, CF/1988). Os prazos de suspensão estão previstos no art.
            12 da Lei de Improbidade Administrativa (LIA), que veremos mais adiante.</li>
          <li>Perda da função pública: Caso o agente público tenha função pública, haverá a consequência de perde a função.
            Veremos que algumas pessoas, mesmo sem ter função pública, podem praticar ato de improbidade como um terceiro: se beneficiando,
            induzindo ou concorrendo para a prática do ato de improbidade</li>
          <li>Ressarcimento ao erário: Art. 8º O sucessor ou o herdeiro daquele que causar danos ao erário ou que se enriquecer ilicitamente 
            estão sujeitos apenas à obrigação de repará-lo até o limite do valor da herança ou do patrimônio transferido</li>
          <li>Indisponibilidade dos bens: A indisponibilidade dos bens não é tecnicamente uma sanção. Trata-se de um “bloqueio” dos bens. 
            O agente não poderá doar, vender, fazer permuta dos bens. O bem fica com a pessoa, mas ele não pode ser alienado. 
            É uma medida para evitar a dilapidação do patrimônio do agente e assegurar o ressarcimento ao erário. 
            O pedido de indisponibilidade de bens dos réus visa garantir a integral recomposição do erário ou do acréscimo patrimonial resultante de enriquecimento ilícito.</li>
        </ol>
        <p>Apesar de a CF/1988 ter estabelecido quatro consequências, a Lei n. 8.429/1992, Lei de Improbidade Administrativa (LIA), 
          ainda fixou mais duas: pagamento de multa civil e proibição de contratar com o Poder Público ou receber benefícios ou incentivos fiscais ou creditícios, 
          direta ou indiretamente, ainda que por intermédio de pessoa jurídica da qual seja sócio majoritário.</p>
        <p>Caberá ao Poder Judiciário, com a autonomia que lhe é atribuída, decidir quais sanções serão aplicadas em cada caso, 
          dentro dos limites definidos pela lei. Um ato de improbidade o agente público pode ter sanção em duas vias. Na via judicial, 
          que vamos estudar nesta aula, e também na via administrativa. A ação de improbidade é de caráter CIVIL, e não penal. O art. 37, § 4º, 
          dispõe que as sanções serão aplicadas sem prejuízo da ação penal cabível, o que dá a entender que se trata de ação civil, 
          uma vez que ainda poderá ser interposta ação penal, se o ato de improbidade também for tipificado como crime na lei penal. Sendo uma ação civil, 
          não haverá foro por prerrogativa de função, que só existe em ação penal. Será interposta no juízo de 1ª instância.</p>
        <p>O STF entendeu que, salvo o Presidente da República, os agentes políticos estão sujeitos à dupla responsabilidade e se submetem tanto à responsabilização 
          civil pelos atos de improbidade administrativa quanto à responsabilização político-administrativa por crimes de responsabilidade</p>
      </div>
      <Link to="/icsmimpactos" className="right__button"><h2>Próxima Matéria</h2></Link>
      <Footer />
    </div>
  )
}

export default ImprobidadeAdministrativa

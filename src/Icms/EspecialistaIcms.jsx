import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import especialistaIcms from "../images/IMG-20231204-WA0098.webp"

function EspecialistaIcms() {

  return (
    <div className="box">
      <Header />
      <div className="main__icsm">
        <img src={especialistaIcms} alt="Imagem do professor especialista" />
        <p className="specialist__title">LUCIANO DO NASCIMENTO COSTA ESPECIALISTA EM PÚBLICO DIREITO-PUC/MINAS, MESTRE EM DIREITOPROCESSUAL CONSTITUCIONAL-UNLZ ARGENTINA</p>
        <p>Os discentes do 5º semestre do Centro Universitário Metropolitano de Camaçari,
          vinculado ao projetointerdisciplinar da Unifamec-Criativa para o semestre 2023.2,
          apresentara-me a sua respectiva proposta de pesquisa de trabalho desta III unidade, intitulada o Imposto sobre operações relativas à Circulação de Mercadorias
          e sobre prestações de Serviços de transporte interestadual eintermunicipal e de comunicação ICMS,
          sobre as operações e prestações que destinem bens eserviços a consumidor final e o diferencial de alíquota respectivo,
          que se tornou relevante face alteração feita no artigo nº 155 da Constituição Federal, através da edição da Emenda Constitucional nº 87,
           de 16 de abril de 2015, para emissão de manifestação doutrinária a luz de uma
          reflexão jurídica hermeneuticamente</p>
        <p>Nesse sentido a presente inquietação acima, se desenvolve em um terreno propicio e relevante a cercada sistemática do ICMS inaugurada com base na modificação da redação do artigo 155, §2º,
           incisosVII e VIII da Constituição Federal pela emenda constitucional nº 87 de 2015, 
           a fim de destacar asInconstitucionalidades e controvérsias decorrentes, 
           bem como fazendo as inflexões sobre asistemática de incidência do imposto sobre a circulação de mercadorias nas operações interestaduais, 
           acentuando, inclusive, o método vigente antes e depois do advento da EC n 87 de 2015, 
           além dademonstração dos fundamentos políticos e econômicos que levaram à alteração, 
           com polarização para averiguar a constitucionalidade de nova sistemática, 
           a partir da análise dos principais reflexostributários e econômicos contemporâneos. 
           Assim sendo, observa-se o impacto negativo gerado emdesfavor das empresas optantes do Simples Nacional, 
           sem, contudo, deixar de ressaltar a necessidadede criação de um mecanismo capaz de repartir de forma equilibrada as receitas do ICMS, 
           a fim deefetivar os preceitos constitucionais de manutenção do pacto federativo e redução das desigualdades regionais.</p>
      </div>
      <Link to="/icsmalunos" className="left__button"><h2>Matéria Anterior</h2></Link>
      <Footer />
    </div>
  )
}

export default EspecialistaIcms

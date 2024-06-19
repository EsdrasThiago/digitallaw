import improbidadePrincipalIMG from "../images/improbidadePrincipal.avif"
import diferencialIMG from "../images/diferencialIMG.png";
import improbidadeIMG3 from "../images/improbidadeIMG3.jpg"
import improbidadeIMG2 from "../images/improbidadeIMG2.webp"
import improbidadeIMG from "../images/improbidade.png"
import nicolauIMG from "../images/NICOLAU.jpg"

export const siteContentsMain = [
    {
        title: "IMPROBIDADE ADMINISTRATIVA",
        img: improbidadePrincipalIMG,
        altImg: "Juiz batendo martelo",
        className: "icsm__link",
        link: "improbidade",
        id: 0
    },
    {
        title: "PRINCIPAIS MUDANÇAS PROVOCADAS PELA EMENDA CONSTITUCIONAL 87/2015 REFERENTES AO DIFERENCIAL DE ALÍQUOTAS DO ICMS-DIFAL",
        img: diferencialIMG,
        altImg: "Saco de dinheiro escrito ICMS",
        className: "icsm__link",
        link: "icsm",
        id: 1
    },
    {
        title: "A EXPLORAÇÃO CONTEMPORÂNEA EM TEMPOS DIGITAIS: A UBERIZAÇÃO COMO MODO INSEGURO DO TRABALHO",
        img: "",
        altImg: "Pessoas trabalhando em fábricas",
        className: "icsm__link",
        link: "uberizacao",
        id: 2
    }
]

export const siteContents = [
    {
        pages: [
            [
                {
                    tag: "img",
                    src: improbidadePrincipalIMG,
                    alt: "Juiz batendo martelo"
                },
                {
                    tag: "p",
                    text: `A improbidade administrativa é uma imoralidade qualificada pela desonestidade.
          É um ato imoral, mas, além disso, tem uma inclinação ainda maior para a desonestidade,
          a má-fé do agente público.`
                },
                {
                    tag: "h2",
                    text: "Fundamento Constitucional"
                },
                {
                    tag: "p",
                    text: `A ação de improbidade tem fundamento constitucional no art. 37, § 4º, da CF/1988:
          Os atos de improbidade administrativa importarão a suspensão dos direitos políticos,
          a perda da função pública, a indisponibilidade dos bens e o ressarcimento ao erário,
          na forma e gradação previstas em lei, sem prejuízo da ação penal cabível.`
                },
                {
                    tag: "h2",
                    text: "A Constituição prevê quatro consequências para aqueles que praticarem ato de improbidade:"
                },
                {
                    tag: "ol",
                    content: [
                        {
                            tag: "li",
                            text: `Suspensão dos direitos políticos: É a incapacidade temporária de se exercer os direitos políticos previstos na Constituição.
            Cuidado! Não pode haver cassação dos direitos políticos (art. 15, CF/1988). Os prazos de suspensão estão previstos no art.
            12 da Lei de Improbidade Administrativa (LIA), que veremos mais adiante.`
                        },
                        {
                            tag: "li",
                            text: `Perda da função pública: Caso o agente público tenha função pública, haverá a consequência de perde a função.
            Veremos que algumas pessoas, mesmo sem ter função pública, podem praticar ato de improbidade como um terceiro: se beneficiando,
            induzindo ou concorrendo para a prática do ato de improbidade.`
                        },
                        {
                            tag: "li",
                            text: `Ressarcimento ao erário: Art. 8º O sucessor ou o herdeiro daquele que causar danos ao erário ou que se enriquecer ilicitamente 
            estão sujeitos apenas à obrigação de repará-lo até o limite do valor da herança ou do patrimônio transferido.`
                        },
                        {
                            tag: "li",
                            text: `Indisponibilidade dos bens: A indisponibilidade dos bens não é tecnicamente uma sanção. Trata-se de um “bloqueio” dos bens. 
            O agente não poderá doar, vender, fazer permuta dos bens. O bem fica com a pessoa, mas ele não pode ser alienado. 
            É uma medida para evitar a dilapidação do patrimônio do agente e assegurar o ressarcimento ao erário. 
            O pedido de indisponibilidade de bens dos réus visa garantir a integral recomposição do erário ou do acréscimo patrimonial resultante de enriquecimento ilícito.`
                        },
                    ]
                },
                {
                    tag: "p",
                    text: `Apesar de a CF/1988 ter estabelecido quatro consequências, a Lei n. 8.429/1992, Lei de Improbidade Administrativa (LIA), 
          ainda fixou mais duas: pagamento de multa civil e proibição de contratar com o Poder Público ou receber benefícios ou incentivos fiscais ou creditícios, 
          direta ou indiretamente, ainda que por intermédio de pessoa jurídica da qual seja sócio majoritário.`
                },
                {
                    tag: "p",
                    text: `Caberá ao Poder Judiciário, com a autonomia que lhe é atribuída, decidir quais sanções serão aplicadas em cada caso, 
          dentro dos limites definidos pela lei. Um ato de improbidade o agente público pode ter sanção em duas vias. Na via judicial, 
          que vamos estudar nesta aula, e também na via administrativa. A ação de improbidade é de caráter CIVIL, e não penal. O art. 37, § 4º, 
          dispõe que as sanções serão aplicadas sem prejuízo da ação penal cabível, o que dá a entender que se trata de ação civil, 
          uma vez que ainda poderá ser interposta ação penal, se o ato de improbidade também for tipificado como crime na lei penal. Sendo uma ação civil, 
          não haverá foro por prerrogativa de função, que só existe em ação penal. Será interposta no juízo de 1ª instância.`
                },
                {
                    tag: "p",
                    text: `O STF entendeu que, salvo o Presidente da República, os agentes políticos estão sujeitos à dupla responsabilidade e se submetem tanto à responsabilização 
          civil pelos atos de improbidade administrativa quanto à responsabilização político-administrativa por crimes de responsabilidade`
                }
            ],
            [
                {
                    tag: "img",
                    src: improbidadeIMG3,
                    alt: "Homens apertando as maos",
                },
                {
                    tag: "p",
                    text: `Portanto uma das mudanças marcantes referem-se à necessidade do dolo específico em qualquer caso, retirando a conduta culposa da figura típica prevista no art. 
        Lei da lei 8.429/1992. Também unificou o prazo prescricional em 8 anos pra qualquer caso, além de incluir de forma expressa o nepotismo como prática de improbidade administrativa, 
        por ferir claramente os preceitos constitucionais da moralidade e impessoalidade. Incluiu em alguns casos a possibilidade de interrupção da prescrição, 
        e restringiu o rol de propositura da ação penal, cabendo agora apenas ao ministério público. Por fim houve alteração nos prazos de suspenção dos direitos políticos, um agravamento.`
                },
                {
                    tag: "p",
                    text: `Essas alterações trazidas pela nova lei podem ser consideradas como uma resposta legislativa aos excessos verificados na apuração e punição dos desvios na administração pública.`
                },
                {
                    tag: "p",
                    text: `Podemos concluir, então, que elas buscam centrar esforços nos atos efetivamente graves, dolosos e de má-fé, 
        de forma a garantir a necessária segurança jurídica ao administrador público no desempenho de suas funções.`
                },
            ],
            [
                {
                    tag: "img",
                    src: improbidadeIMG,
                    alt: "Tabela com atos de improbridade"
                },
                {
                    tag: "p",
                    text: `Apesar de não estar no código penal, quem comete improbidade pode, sim, sofrer consequências.
          Pelo art. 37º da Constituição Federal, os condenados podem sofrer diversas consequências serem obrigados a ressarcir o dano e,
          até mesmo, suspensão dos direitos políticos. Variando conforme a extensão do ato e gravidade. Paralelo a isto,
          o órgão pode abrir um processo administrativo disciplinar - PAD contra o agente público.`
                },
                {
                    tag: "p",
                    text: `Por exemplo: o PAD tem o objetivo de apurar a conduta do agente e o grau de responsabilidade que ele tem.
          Portanto, lembre-se que existem casos em que cabe um processo criminal, o que acaba gerando outros desdobramentos.`,
                },
            ],
            [
                {
                    tag: "img",
                    src: improbidadeIMG2,
                    alt: "Martelo algemado"
                },
                {
                    tag: "p",
                    text: `Os crimes de responsabilidade não são crimes na acepção técnica do termo acima exposto, 
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
        Ambos não excluem a possibilidade de responsabilização em outras searas, como no direito penal, ou de maneira administrativa.`
                }
            ],
            [
                {
                    tag: "img",
                    src: nicolauIMG,
                    alt: "Nicolau"
                },
                {
                    tag: "p",
                    text: `A 3ª Turma do Tribunal Regional Federal da 3ª Região confirmou a condenação do ex-juiz Nicolau dos Santos Neto,
          pelo desvio de quase R$ 170 milhões da construção do Fórum Trabalhista de São Paulo.`
                },
                {
                    tag: "p",
                    text: `Desembargadores analisaram duas ações civis públicas por improbidade administrativa contra o réu,
          que terá de ressarcir os cofres públicos e pagar multa civil e danos morais.`
                },
                {
                    tag: "p",
                    text: `A construção do Fórum Trabalhista de São Paulo gerou desembolsos de R$ 235 milhões dos cofres públicos.
          De acordo com a prova pericial, porém, as obras somaram R$ 66 milhões,
          além do valor utilizado para a aquisição do terreno em que foi erguido o prédio. Em 2001,
          o Tribunal de Contas da União confirmou o desvio de R$ 170 milhões, em valores da época. Atualizado,
          o montante desviado supera R$ 1 bilhão.`
                },
                
            ]
        ],
        id: 0,
    },
]
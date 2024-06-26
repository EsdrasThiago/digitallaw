import improbidadePrincipalIMG from "../images/improbidadePrincipal.avif"
import diferencialIMG from "../images/diferencialIMG.png";
import improbidadeIMG3 from "../images/improbidadeIMG3.jpg"
import improbidadeIMG2 from "../images/improbidadeIMG2.webp"
import improbidadeIMG from "../images/improbidade.png"
import nicolauIMG from "../images/NICOLAU.jpg"
import lulaIMG from "../images/LULA_OLINDA.jpg";
import dilmaIMG from "../images/dilma-rousseff-129.webp";
import coordenadorIMG from "../images/coordenador.jpg";
import impactoIMG from "../images/impactosIMG.png"
import modulacaoIMG from "../images/modulacaoIMG.png"
import alunos from "../images/IMG-20231128-WA0023.webp"
import fileIcms from "../files/Modelo_Paper_-_Unidade_II_UFC_1.pdf"
import especialistaIcms from "../images/especialistaicmsmelhorado.png"

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

export const improbidadeContents = [
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
    ],
    [
        {
            tag: "img",
            src: lulaIMG,
            alt: "Lula - Luis Inacio"
        },
        {
            tag: "p",
            text: `Luciana Santos foi prefeita em Olinda no ano de 2001-2008,
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
          Tecnologia e Inovações no governo Luís Inácio da Silva em dezembro de 2022 Luciana é a primeira mulher a ocupar o posto.`
        }
    ],
    [
        {
            tag: "img",
            src: dilmaIMG,
            alt: "Dilma"
        },
        {
            tag: "p",
            text: `Dilma foi afastada pelo Senado sob acusação de crime de responsabilidade fiscal.
          Os autores do pedido de afastamento de Dilma Rousseff alegaram que ela maquiou as contas públicas e desrespeitou a lei orçamentária durante a campanha eleitoral.
          O objetivo seria dar uma falsa sensação de segurança à economia e garantir a reeleição em 2014.
          As manobras foram batizadas de "pedaladas fiscais" em uma alusão à atividade física preferida da política.
          Ela costumava andar de bicicleta nas horas de folga. E a palavra "pedalar" usada de maneira vulgar quer dizer "enganar".
          O resultado do julgamento feito pelo senado resultou na perda do cargo de presidência da República,
          todavia não houve a inabilitação para exercer um novo vínculo com a administração pública.`
        }
    ],
    [
        {
            tag: "img",
            src: coordenadorIMG,
            alt: "Dr.Jardel Alencar Machado"
        },
        {
            tag: "p",
            text: `Dr.Jardel Alencar Machado Advogado, Pós Graduado em Direito Público, Assessor Jurídico Municipal,
                     Membro da Comissão de Juizados Especiais OAB/BA, Professor Universitário. 
                     Ex – Presidente do Conselhos de Execuções Penais de Barreiras Bahia TJBA,
                     Ex – Diretor de Relações Institucionais CCJA da OAB subseção Barreiras Bahia.`,
            className: "specialist__title"
        },
        {
            tag: "p",
            text: `Quando pensamos em um dos males que assolam a Administração Pública, a Improbidade Administrativa se sobressai,
          não pelo conceito purista do termo, mas pela fragilidade da moralidade humana quando posta em “xeque” no decurso dos impulsos indispensáveis para a movimentação da máquina Administrativa.`,
        },
        {
            tag: "p",
            text: `A Improbidade Administrativa representa uma grave violação dos princípios éticos e legais que regem a administração pública.
          Seus efeitos nocivos comprometem o desenvolvimento e a confiança da sociedade nas instituições governamentais.`,
        },
        {
            tag: "p",
            text: `Trata-se da responsabilidade moral dos agentes públicos em todos os seus atos,
          mesmo quando a tal ilicitude oferece alguns benefícios para a população. Em outras palavras,
          o cenário público se cobre pelo manto da generosidade administrativa,
          onde recursos e benfeitorias públicas são facilmente garantidos para aqueles que se curvam aos mandamentos do sistema ímprobo.`,
        },
        {
            tag: "p",
            text: `No momento, ainda não há escapatória, o sistema confronta a moralidade pública e, por isso,
          a Lei de Improbidade Administrativa jamais será suficiente para reverter o quadro na sua totalidade.
          É necessário que além da atuação repressiva da lei em conjunto com o judiciário,
          haja também uma iniciativa preventiva para nutrir e conservar a probidade daqueles que almejam contribuir com os serviços públicos,
          sendo imperioso a atuação de um sistema de justiça imparcial, fiscalização rigorosa e o engajamento da população.`,
        },
        {
            tag: "p",
            text: `Diante deste cenário, mesmo com os atos repressivos do Estado,
          resta notório a dificuldade de a moralidade administrativa receber seu devido destaque,
          visto que em determinas situações, sua simples existência pode dificultar ou até mesmo inibir totalmente recursos,
          emendas e diversos benefícios para a população.`,
        },
        {
            tag: "p",
            text: `Por isso, a Administração Pública enfrenta o grande desafio da “busca pela probidade”,
          onde as raízes da desonestidade se enraizaram com o tempo em virtude da cultura,
          dos costumes e da distorcida visão do que seriam políticas públicas, estas,
          astuciosamente interpretadas como políticas “negociáveis”.`,
        },
    ]
]

export const icmsContents = [
    [
        {
            tag: "img",
            src: diferencialIMG,
            alt: "Saco de dinheiro escrito 'ICMS'"
        },
        {
            tag: "p",
            text: `No dia 16/04/2015 foi promulgada a Emenda Constitucional n° 87 de 2015,
        que alterou a sistemática de cobrança do ICMS nas operações interestaduais
        destinadas a não-contribuintes do imposto.`
        },
        {
            tag: "p",
            text: `Trazendo para a prática,
        vamos imaginar uma loja virtual de calçados, localizada no nosso estado (Bahia),
        que vende um par de tênis para uma pessoa física localizada no Estado do Rio de Janeiro
        por R$100,00. Pela sistemática antiga, deveríamos utilizar a alíquota interna do Estado
        da Bahia (19%) e a totalidade do imposto iria para Ba (0,19x R$ 100,00 = 19,00).`
        },
        {
            tag: "p",
            text: `Como podemos verificar, esta sistemática beneficiava os Estados remetentes,
        pois acabavam recebendo todo o ICMS das operações interestaduais destinadas
        a não-contribuintes.`
        },
    ],
    [
        {
            tag: "img",
            src: impactoIMG,
            alt: "Difal de ICMS: Empresas do Simples Nacional sao obrigadas a paga-lo?"
        },
        {
            tag: "p",
            text: `O Simples Nacional é um regime unificado de recolhimento tributário aplicável às Microempresas e Empresas de Pequeno Porte.`
        },
        {
            tag: "p",
            text: `Ele surgiu visando reduzir a burocracia e os custos de pequenos empresários, criando um sistema unificado de recolhimento de
        tributos, simplificando declarações, entre outras facilidades, e desta forma, incentivar o empreendedorismo no país.`
        },
        {
            tag: "p",
            text: `Por ser um regime de tratamento tributário diferenciado e favorecido, com recolhimento unificado,
        o DIFAL já estaria incluso no cálculo, assim como outros impostos devidos.`
        },
    ],
    [
        {
            tag: "img",
            src: modulacaoIMG,
            alt: "Diversas pessoas"
        },
        {
            tag: "h1",
            text: `DECISÃO`
        },
        {
            tag: "p",
            text: `O Plenário do Supremo Tribunal Federal (STF),em 21 de fevereiro de 2021,julgou inconstitucional a
        cobrança do Diferencial de Alíquota do Imposto sobre Circulação de Mercadorias e Serviços (Difal/ICMS),
        introduzida pela Emenda Constitucional (EC) 87/2015, sem a edição de lei complementar para disciplinar esse mecanismo de compensação.
        A matéria foi discutida no julgamento conjunto do Recurso Extraordinário (RE) 1287019, com repercussão geral (Tema 1093),
        e da Ação Direta de Inconstitucionalidade (ADI) 5469. Ao final do julgamento, os ministros decidiram que a decisão produzirá efeitos
        apenas a partir de 2022, dando oportunidade ao Congresso Nacional para que edite lei complementar sobre a questão.`
        },
        {
            tag: "h1",
            text: `MODULAÇÃO DOS EFEITOS`
        },
        {
            tag: "h1",
            text: `Os ministros aprovaram, por nove votos a dois, a modulação de efeitos para que a decisão, nos dois processos,
        produza efeitos a partir de 2022, exercício financeiro seguinte à data do julgamento, ou seja,
        as cláusulas continuam em vigência até dezembro de 2021, exceto em relação à cláusula 9ª,
        em que o efeito retroage a fevereiro de 2016, quando foi deferida, em medida cautelar na ADI 5464,
        sua suspensão. Segundo o ministro Dias Toffoli, autor da proposta de modulação, a medida é necessária para evitar insegurança jurídica,
        em razão da ausência de norma que poderia gerar prejuízos aos estados. O ministro salientou que,
        durante esse período, o Congresso Nacional terá possibilidade de aprovar lei sobre o tema.
        Ficam afastadas da modulação as ações judiciais em curso sobre a questão.`
        },
    ],
    [
        {
            tag: "img",
            src: alunos,
            alt: "Alunos apresentando sobre ICMS"
        },
        {
            tag: "a",
            link: fileIcms,
            downloadName: "Conteudo ICMS",
            text: "Baixar conteudo"
        }
    ],
    [
        {
            tag: "img",
            src: especialistaIcms,
            alt: "LUCIANO DO NASCIMENTO COSTA"
        },
        {
            tag: "p",
            className: "specialist__title",
            text: `LUCIANO DO NASCIMENTO COSTA ESPECIALISTA EM PÚBLICO DIREITO-PUC/MINAS, MESTRE EM DIREITO PROCESSUAL CONSTITUCIONAL-UNLZ ARGENTINA`,
        },
        {
            tag: "p",
            text: `Os discentes do 5º semestre do Centro Universitário Metropolitano de Camaçari,
          vinculado ao projeto interdisciplinar da Unifamec-Criativa para o semestre 2023.2,
          apresentar-me a sua respectiva proposta de pesquisa de trabalho desta III unidade, intitulada o Imposto sobre operações relativas à Circulação de Mercadorias
          e sobre prestações de Serviços de transporte interestadual e intermunicipal e de comunicação ICMS,
          sobre as operações e prestações que destinem bens e serviços a consumidor final e o diferencial de alíquota respectivo,
          que se tornou relevante face alteração feita no artigo nº 155 da Constituição Federal, através da edição da Emenda Constitucional nº 87,
          de 16 de abril de 2015, para emissão de manifestação doutrinária a luz de uma reflexão jurídica hermeneuticamente.`,
        },
        {
            tag: "p",
            text: `Nesse sentido a presente inquietação acima, se desenvolve em um terreno propício e relevante a cerca da sistemática do ICMS inaugurada com base na modificação da redação do artigo 155, §2º,
          incisos VII e VIII da Constituição Federal pela emenda constitucional nº 87 de 2015,
          a fim de destacar as Inconstitucionalidades e controvérsias decorrentes,
          bem como fazendo as inflexões sobre a sistemática de incidência do imposto sobre a circulação de mercadorias nas operações interestaduais,
          acentuando, inclusive, o método vigente antes e depois do advento da EC nº 87 de 2015,
          além da demonstração dos fundamentos políticos e econômicos que levaram à alteração,
          com polarização para averiguar a constitucionalidade de nova sistemática,
          a partir da análise dos principais reflexos tributários e econômicos contemporâneos.
          Assim sendo, observa-se o impacto negativo gerado em desfavor das empresas optantes do Simples Nacional,
          sem, contudo, deixar de ressaltar a necessidadede criação de um mecanismo capaz de repartir de forma equilibrada as receitas do ICMS,
          a fim de efetivar os preceitos constitucionais de manutenção do pacto federativo e redução das desigualdades regionais.`,
        },
        {
            tag: "a",
            link: fileIcms,
            downloadName: "Conteudo ICMS",
            text: "Baixar conteudo"
        },
        {
            tag: "gameButton",
        }
    ]
]

export const uberizacaoContents = [
    [
        {
            tag: "h2",
            text: "Contexto histórico de trabalho e o surgimento da uberização no Brasil"
        },
        {
            tag: "p",
            text: `A modernização capitalista do país, depois de décadas de lutas operárias, a 
legislação social protetora do trabalho de modo conflituoso e contraditório, nasceu a
Consolidação das Leis Trabalhistas que foi criada pelo Decreto-Lei n° 5.452, de 1° de 
maio de 1943, e sancionada pelo presidente Getúlio Vargas, durante o período do Estado 
Novo. Carregando sua contradição original, a CLT acabou por se tornar, no universo da 
vida cotidiana da classe trabalhadora, uma espécie de constituição do trabalho no Brasil.  `
        },
        {
            tag: "p",
            text: `Segundo o Professor Ricardo Antunes, a uberização é um processo no qual as 
relações de trabalho são crescentemente individualizadas e invisibilizadas, assumindo 
assim a aparência de “prestação de serviços” e obtendo as relações de assalariamento e 
de exploração do trabalho. Nesse sentido, o nobre docente explica que foram as crises do 
sistema capitalista que levaram a avanços tecnológicos e à consequente uberização do 
trabalho, este processo se iniciou em 1973 e criou forças nos anos de 2008 e 2009, quando 
houve mais investimento em tecnologias para tentar recuperar os níveis de crescimento 
econômico. `
        },
        {
            tag: "p",
            text: `A precarização do trabalho é um fenômeno que tem se acentuado em muitos 
países, incluindo o Brasil ela pode ser entendida como qualquer diminuição ou redução 
de direitos e benefícios trabalhistas aos trabalhadores. Este processo é caracterizado por 
várias condições, incluindo: Instabilidade e efemeridade contratuais, ou seja, muitos 
trabalhadores estão sujeitos a contratos de trabalho sem muitas garantias e de forma 
passageira, configurando, emprego incerto, inseguro, sem garantias trabalhistas mínimas, refletindo cada vez mais em direitos trabalhistas básicos, como salários insuficientes, 
ambientes perigosos e insalubres, e a não valorização do trabalhador.`
        },
        {
            tag: "p",
            text: `Estamos passando por um processo de precarização e, a cada nova alteração legal, 
mais alguma garantia é subtraída, seja um direito retirado diretamente ou uma alteração 
sistemática que tem como consequência a perda de alguma garantia ou proteção ao 
trabalhador, onde reverbera com a reforma trabalhista brasileira, feita por meio da Lei nº 
13.467/17, de certa forma, tem acentuado o processo de precarização do trabalho, 
agravando o quadro de desigualdade social.`
        }
    ],
    [
        {
            tag: "h2",
            text: "A importância das contribuições sociais para os motoristas de aplicativo."
        },
        {
            tag: "p",
            text: `Os impostos sociais no Brasil, como o INSS, FGTS, PIS/PASEP e COFINS, são 
fundamentais para financiar a seguridade social e o bem-estar da população. Cada um tem 
sua função específica: o INSS oferece benefícios como aposentadoria e auxílio por 
incapacidade; o FGTS é uma rede de segurança financeira para trabalhadores demitidos 
sem justa causa; o PIS/PASEP complementa a renda dos trabalhadores, sendo o PIS para 
o setor privado e o PASEP para servidores públicos; e o COFINS financia serviços 
essenciais como saúde e assistência social.`
        },
        {
            tag: "p",
            text: `Para que o trabalhador tenha uma rede de proteção, é de suma importância que o 
sejam conferidos direitos que visem o bem-estar social do trabalhador, para que não 
ocorra um retrocesso jurídico, através do reconhecimento da importância de pagar os 
impostos sociais para o trabalhador motorista de aplicativo. É explicito que existe um 
impasse na relação de trabalho do motorista de aplicativo e as empresas de mobilidade, 
por isso existe a importância dos impostos sociais diante o direito a seguridade e a 
proteção do trabalhador.`
        },
    ],
    [
        {
            tag: "h2",
            text: `Solidificação jurisprudêncial e os entendimentos dos tribunais sobre a uberização.`
        },
        {
            tag: "p",
            text: `O Tribunal Superior do Trabalho – TST, confirmou a decisão 
regional que reconheceu vínculo empregatício entre a reclamante e a UBER, no período 
de 01/12/2018 a 30/05/2019. A sentença determinou à UBER a anotação da CTPS e o 
pagamento de diversos direitos trabalhistas, como aviso prévio, 13º salário proporcional, 
férias proporcionais com 1/3, FGTS com multa fundiária, indenização substitutiva de 
seguro desemprego, multa do artigo 477, § 8º, da CLT, adicional de horas extras, e 
adicional para trabalho em domingos e feriados, com reflexos.`
        },
        {
            tag: "p",
            text: `A parte recorrente alega repercussão geral, argumentando que a decisão fere 
princípios constitucionais como livre iniciativa e concorrência, afetando o modelo de 
negócios de "economia compartilhada". Afirma que a Lei 13.640/2018, ao regulamentar 
o transporte remunerado privado individual, estabelece que os motoristas devem ser 
contribuintes individuais, indicando uma relação comercial, não de emprego.`
        },
        {
            tag: "p",
            text: `Argumenta que a UBER é uma empresa de tecnologia, não de transportes, e que seus serviços são usados pelos motoristas para localização e captação de usuários.
             É esperado que o STF discuta o tema em 2024, considerando a ação envolvendo a Uber, onde houve maioria para reconhecer arepercussão geral.`
        },
        {
            tag: "p",
            text: `O Superior Tribunal Federal (STF) reconheceu a repercussão geral no Recurso 
Extraordinário 1.446.336 da Uber, discutindo o vínculo empregatício dos motoristas, mas 
o mérito ainda não foi julgado, afetando outros casos similares e aumentando as 
reclamações constitucionais devido às divergências entre tribunais. O Projeto de Lei 
Complementar (PLC) encaminhado pelo presidente regula a atividade dos motoristas de aplicativos, porém não abrange os entregadores, gerando incerteza jurídica até a decisão 
definitiva do STF. O relator do caso destaca a importância de uma solução uniforme 
devido à divergência de decisões sobre o tema e seu impacto na economia do país.`
        },
    ],
    [
        {
            tag: "h2",
            text: "Resultados obtidos através da pesquisa de campo."
        },
        {
            tag: "p",
            text: `O referido trabalho tem por finalidade o estudo de caso por meio de uma pesquisa 
qualitativa, onde os resultados obtidos foram através do termo de consentimento e livre 
esclarecimento, onde os motoristas por plataforma de mobilidade urbana no município de 
Camaçari/Ba, submeteram-se a participar do projeto de pesquisa intitulado “A 
EXPLORAÇÃO CONTEMPORÂNEA EM TEMPOS DE DIGITAIS: A UBERIZAÇÃO 
COMO MODO INSEGURO DO TRABALHO”.`
        },
        {
            tag: "p",
            text: `O referido trabalho tem por finalidade o estudo de caso por meio de uma pesquisa 
qualitativa, onde os resultados obtidos foram através do termo de consentimento e livre 
esclarecimento, onde os motoristas por plataforma de mobilidade urbana no município de 
Camaçari/Ba, submeteram-se a participar do projeto de pesquisa intitulado “A 
EXPOLRAÇÃO CONTEMPORÂNEA EM TEMPOS DE DIGITAIS: A UBERIZAÇÃO 
COMO MODO INSEGURO DO TRABALHO”.`
        },
        {
            tag: "p",
            text: `A participação na pesquisa constituiu em produzir informações aprofundadas e 
ilustrativas a respeito do tema, através de perguntas claras que estão relacionadas aos 
sentimentos e percepções dos motoristas de aplicativos em relação às plataformas e a 
legislação brasileira. `
        },
        {
            tag: "h2",
            text: "Diante do exposto, foram desenvolvidos gráficos para a elucidação dos dados coletados:"
        },
    ]
]
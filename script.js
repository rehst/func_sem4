const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas= [
    {
        enunciado: " Qual dos seguintes é um conceito mais relacionado à IA?",
        alternativas: [
         {
            texto: "Algoritmos de previsão do tempo",
            afirmacao: "afirmacao"
         },
         {
             texto: "Redes neurais artificiais",
             afirmacao:"afirmacao"
         }
            
            
        ]
    },
    {
        enunciado: "Em qual área a IA tem maior impacto atualmente? ",
        alternativas: [
        {
            texto:"Desenvolvimento de vacinas", 
            afirmacao:"afirmacao"
        },
        {
            texto: "Assistentes virtuais",
            afirmacao:"afirmacao"
        }
            
           
            
        ]
    },
    {
        enunciado: "Qual destes é um desafio ético importante relacionado à IA?",
        alternativas: [
            {
                texto:"O uso de IA na agricultura.", 
                afirmacao:"afirmacao"
            },
            {
                texto:  "Viés algorítmico",
                afirmacao:"afirmacao"
            }
            
           
        ]
    },
    {
        enunciado: "4-Qual dos seguintes é um campo interdisciplinar frequentemente associado à IA? ",
        alternativas: [
            {
                texto:"Biologia marinha", 
                afirmacao:"afirmacao"
            },
            {
                texto: "Ciência de dados",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
    {
        enunciado: "Qual tecnologia é frequentemente usada para treinar IA?",
        alternativas: [
            {
                texto: "Energia solar", 
                afirmacao:"afirmacao"
            },
            {
                texto: "Computação de alto desempenho (HPC)",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta (){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent ="";
    mostraAlternativas();
}

function mostraAlternativas (){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
    
}
function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal = afirmacoes + " ";
            atual++;
            mostraPergunta();
    
}
function mostraResultado(){
    caixaPerguntas.textContent ="Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}
mostraPergunta();
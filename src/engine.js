/* 
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" 
*/

const nomeJogador = prompt("Digite seu nome aventureiro: ")
document.getElementById("resultado").innerText = nomeJogador + " "

function esconderBotoes(clicado) {
    const botoes = ["botao1", "botao2", "botao3", "botao4"]; // Lista de IDs dos botões

    botoes.forEach(function(botaoId) {
        // Verifica se o botão atual não é o clicado e o esconde
        if (botaoId !== clicado) {
            document.getElementById(botaoId).style.display = "none"; // Esconde o botão
        }
        if (botaoId === clicado)
            switch (botaoId){
                case "botao1":
                    document.getElementById("escolhida").innerHTML = nomeJogador + " você agora é um Mago" 
                    break;
                case "botao2":
                    document.getElementById("escolhida").innerHTML = nomeJogador + " você agora é um Espadachin" 
                    break;
                case "botao3":
                    document.getElementById("escolhida").innerHTML = nomeJogador + " você agora é um Elfo Arqueiro" 
                    break;
                case "botao4":
                    document.getElementById("escolhida").innerHTML = nomeJogador + " você agora é um Guerreiro orc" 
                    break;
            }
    });
}

const botoes = ["botao1", "botao2", "botao3", "botao4"];

botoes.forEach(function(botaoId) {
    document.getElementById(botaoId).addEventListener("click", function() {
        esconderBotoes(botaoId);
    });
});

function qtdXP() {
    let exp = document.getElementById("exp").value;
    
    let classificacao = ""

    document.getElementById("qexp").innerText = "Essa é sua quantidade de XP total: " + exp;
    if (exp <= 1000){
        classificacao = "Ferro"
    } else if (exp <= 2000){
        classificacao = "Bronze"
    } else if (exp <= 5000){
        classificacao = "Prata"
    } else if (exp <= 7000){
        classificacao = "Ouro"
    } else if (exp <= 8000){
        classificacao = "Platina"
    } else if (exp <= 9000){
        classificacao = "Ascendente"
    } else if (exp <= 10000){
        classificacao = "Imortal"
    } else {
            classificacao = "Radiante" 
    }

    document.getElementById("final").innerText = `O Herói de nome **${nomeJogador}** está no nível de **${classificacao}**`;
}



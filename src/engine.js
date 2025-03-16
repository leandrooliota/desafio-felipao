const state = {
    view: {
        nomeJogador : prompt("Digite seu nome aventureiro: "),
    },
    values: {

    },
    actions: {
        botoes: ["botao1", "botao2", "botao3", "botao4"],
    }

}

document.getElementById("fulano").innerText = `${state.view.nomeJogador} `

function esconderBotoes(clicado) {

    state.actions.botoes.forEach(function(botaoId) {
        // Verifica se o botão atual não é o clicado e o esconde
        if (botaoId !== clicado) {
            document.getElementById(botaoId).style.display = "none"; // Esconde o botão
        }
        if (botaoId === clicado){
            switch (botaoId){
                case "botao1":
                    document.getElementById("escolhida").innerHTML = `${state.view.nomeJogador} você agora é um Mago`  
                    break;
                case "botao2":
                    document.getElementById("escolhida").innerHTML = `${state.view.nomeJogador} você agora é um Espadachin`
                    break;
                case "botao3":
                    document.getElementById("escolhida").innerHTML = `${state.view.nomeJogador} você agora é um Elfo Arqueiro` 
                    break;
                case "botao4":
                    document.getElementById("escolhida").innerHTML = `${state.view.nomeJogador} você agora é um Guerreiro Orc` 
                    break;
            }
        }
    });
}

state.actions.botoes.forEach(function(botaoId) {
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

    document.getElementById("final").innerText = `O Herói de nome **${state.view.nomeJogador}** está no nível de **${classificacao}**`;
}



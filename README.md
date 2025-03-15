# 🦸‍♂️ Classificação de Heróis  

Este projeto é uma aplicação simples em **HTML, CSS e JavaScript** que permite classificar um herói com base na quantidade de **XP (Experiência)** inserida pelo usuário.  

## 🚀 Funcionalidades  
- O usuário insere um valor de XP em um campo de entrada.  
- Ao clicar no botão **"Calcular minha classificação"**, a aplicação exibe a categoria do herói.  
## 🏆 Classificações de XP  

- 🔩 **Ferro** (XP < 1.000)  
- 🥉 **Bronze** (XP entre 1.001 e 2.000)  
- 🥈 **Prata** (XP entre 2.001 e 5.000)  
- 🏅 **Ouro** (XP entre 5.001 e 7.000)  
- 💎 **Platina** (XP entre 7.001 e 8.000)  
- 🚀 **Ascendente** (XP entre 8.001 e 9.000)  
- 🔥 **Imortal** (XP entre 9.001 e 10.000)  
- 🌟 **Radiante** (XP ≥ 10.001)   

## 🛠️ Tecnologias Utilizadas  
- **HTML** → Estrutura da página  
- **CSS** → Estilização básica  
- **JavaScript** → Lógica de classificação  

## 🎮 Como Usar  
1. Abra o arquivo `index.html` em um navegador.  
2. Digite um valor de XP na caixa de entrada.  
3. Clique no botão **"Calcular minha classificação"**.  
4. Veja a categoria do herói ser exibida na tela!

## 🔎 Sites Utilizados
1. [Fontes do Google: para baixar fontes no estilo gamer](https://fonts.google.com/)
2. [Canva: para criação e edição de imagens](https://www.canva.com/)
3. [Gemini: para criação de imagens por IA](https://gemini.google.com/app)
4. [ChatGPT: para criação das histórias e caracteristas dos personagens](https://chatgpt.com/)

## 📌 Exemplo de Código (JavaScript)

<details>
  <summary>Ver código em JavaScript</summary>
    
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

    
</details>

/*
Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir um caixa com os botões de seleção de plataforma.
    Passo 1 - pegar o botã de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele.

    Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado.

    Passo 3 - pegar o clique do usuário no JS.
    
    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo apareça.

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar no botão fechar, o conteudo deve ser escondido.

    Passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classe "Ativo" pra que ele esconda o conteúdo novamente.

*/

console.log(document);

const botao = document.querySelector(".btn-platform");
const elementoPlataformas = document.querySelector(".btn-platform .platform");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");

    // if(elementoPlataformas.classList.contains("ativo")){
    //     elementoPlataformas.classList.remove("ativo");
    // }else{
    //     elementoPlataformas.classList.add("ativo");
    // }
});
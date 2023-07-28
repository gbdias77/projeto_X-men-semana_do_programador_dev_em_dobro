// /* 
//   O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

//     OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//         passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

//         passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

//         passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

//     OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
//         passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
//         passo 2 - alterar a imagem do personagem grande
//         passo 3 - alterar o nome do personagem grande
//         passo 4 - alterar a descrição do personagem grande
// */


//     OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//         passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

//         passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

//         passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

console.log(document.querySelectorAll(".personagem"))
// console.log mostra todas as ações dentro do site

//get element by id = pega um elemento pelo seu id

//         passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll(".personagem")
//QuerySelectorALL cria uma função que procura todos os itens dentro da string
//Variável costuma ser minúscula



personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window,innerWidth < 450) {
            window.scrollTo({top:0, behavior: 'smooth'});
        }
        //O addEventListener não pode ser usado em arrays
        //         passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
        // .remove não precisa do . indicador de classe

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        //         passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse


        personagem.classList.add('selecionado')


        //     OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        //         passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        //         passo 2 - alterar a imagem do personagem grande
        //         passo 3 - alterar o nome do personagem grande
        //         passo 4 - alterar a descrição do personagem grande


        //         passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        
        const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        console.log(imagemPersonagemGrande)

        //         passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
    

        //         passo 3 - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');
        

        //passo 4 - alterar a descrição do personagem grande
        
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        
    }
    );
})




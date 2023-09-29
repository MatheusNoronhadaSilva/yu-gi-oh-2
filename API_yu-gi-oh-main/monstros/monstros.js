'use strict'

async function pegarImagens(){
    const endPoint ='https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster'
    const response = await fetch(endPoint)
    const imagens = await response.json()
    return imagens.data
}

function criarTagImg (imagem) {
    
    const galeria = document.getElementById('cartas')
    const tagImg = document.createElement('img')
    //const tagID = imagem.id
    //tagImg.id = tagID
    tagImg.src = imagem.card_images[0].image_url

    galeria.appendChild(tagImg)
}

async function carregarFotos(){
    const imagens = await pegarImagens()
    if(imagens != undefined) {
        imagens.forEach(criarTagImg)
    } else {
        console.log('ERRRRROOOOO')
    }
}

//const botao = document.getElementById(tagID)
//botao.addEventListener('click', selecionarImagem)

//function selecionarImagem (tagID) {

    //const imagemSelecionada = document.getElementById(tagID)
    //const galeria_info = document.getElementById('info_carta')
    //galeria_info.appendChild(imagemSelecionada)
//}


//


carregarFotos()
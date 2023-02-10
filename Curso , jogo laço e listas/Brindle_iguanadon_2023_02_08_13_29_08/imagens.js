//imagens e sons do jogo 


let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro ;
let imagemCarro2 ;
let imagemCarro3 ;

let somDaTrilha ;
let somDaColisao ;
let somDoPonto ;

//sons do jogo 
function preload (){
  imagemDaEstrada = loadImage("ima/estrada.png");
  imagemDoAtor = loadImage ("ima/ator-1.png");
   imagemCarro = loadImage ("ima/carro-1.png");
 imagemCarro2 = loadImage ("ima/carro-2.png");
   imagemCarro3 = loadImage ("ima/carro-3.png");

  somDaTrilha =loadSound ("sons/trilha.mp3");
  somDaColisao = loadSound ("sons/colidiu.mp3");
  somDoPonto =loadSound ("sons/pontos.wav");  
  

  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3  ]
}




const musica=document.getElementById('musica');const botaoMusica=document.getElementById('botaoMusica');const copiarPix=document.getElementById('copiarPix');const mensagemPix=document.getElementById('mensagemPix');

// TROQUE AQUI PELA CHAVE PIX REAL
const chavePix='984255287';

function tocarMusica(){musica.play().then(()=>{botaoMusica.classList.remove('paused');botaoMusica.textContent='♫';}).catch(()=>{botaoMusica.classList.add('paused');botaoMusica.textContent='▶';});}
window.addEventListener('load',tocarMusica);
document.body.addEventListener('click',tocarMusica,{once:true});
botaoMusica.addEventListener('click',(event)=>{event.stopPropagation();if(musica.paused){tocarMusica();}else{musica.pause();botaoMusica.classList.add('paused');botaoMusica.textContent='▶';}});
copiarPix.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(chavePix);mensagemPix.textContent='Chave Pix copiada.';}catch(error){mensagemPix.textContent='Chave Pix: '+chavePix;}});
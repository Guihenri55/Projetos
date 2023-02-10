const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(funcao, 500  );
}

document.addEventListener('keydown', jump);
  

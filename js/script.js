const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
//const audio = new Audio('pulo.mp3') -> Em andamento

    const jump = () => {
        //audio.play('jump'); -> Em andamento
        mario.classList.add('jump');
        count++;
        Jumps.innerHTML = count;
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500)
    }

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '75px'
            mario.style.marginLetf = '100%'

            clearInterval(loop);
        }    

    }, 10);


const ColorButton = document.querySelector('input#Try');
const Jumps = document.getElementById('jumpery')
var count = 0;


function Color() {
    ColorButton.style.background = '#DBCA0B'
}
function Color2() {
    ColorButton.style.background = 'white'
}
function Reiniciar() {
    window.location.reload(true);
}

ColorButton.addEventListener('mouseenter', Color)
ColorButton.addEventListener('mouseout', Color2)
document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);


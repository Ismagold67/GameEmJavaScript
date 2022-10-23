const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

    const jump = () => {
        mario.classList.add('jump');

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

document.addEventListener('touchstart', jump);
<<<<<<< HEAD
document.addEventListener('keydown', jump)

const ColorButton = document.querySelector('input#Try');
const Jumps = document.querySelector('input#jumper')

function jumps() {
    const Av = Jumps.addEventListener('keydown')
    for(var a = 1000;Av < a;Av++) {
        Jumps.innerHTML = `${Av}`
        Jumps.appendChild(input)
    }
}
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
=======
document.addEventListener('keydown', jump);
>>>>>>> 17b44ff488c168616a43f7e24b1bc5ee3f088ffa

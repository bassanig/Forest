import './style.css';

const mobileBTN = document.querySelector('.js-btn');
const mobileNav = document.querySelector('.js-mobileNav');

mobileNav.classList.add('hidden')

mobileBTN.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    mobileNav.classList.toggle('flex');
})

mobileNav.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    mobileNav.classList.toggle('flex');
})



const video = document.querySelector('.js-video');
const tempo = document.querySelector('.js-tempo');
const temperatura = document.querySelector('.js-temperatura');
const dia = document.querySelector('.js-dia');

const numeroRandom = Math.floor(Math.random() * 10) + 20;
temperatura.innerText = numeroRandom + "°";
tempo.innerText = numeroRandom < 25 ? `🌧️${numeroRandom + 4}°` : `🌤️${numeroRandom + 4}°`;
dia.innerText = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
});

console.log(numeroRandom);

video.src = numeroRandom < 25 ? '/Forest/public/imgs/video_chuva.mp4' : '/Forest/public/imgs/video_sol.mp4';
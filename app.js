const btnFlutuante = document.querySelector('.botao-flutuante');
const btnFlutuanteVideo = document.querySelector('.botao-flutuante-video');
const btnFlutuantePresencial = document.querySelector('.botao-flutuante-presencial');
const escuro = document.querySelector('.escuro');

btnFlutuante.addEventListener('click', () => {
    escuro.classList.toggle('hidden');
    btnFlutuanteVideo.classList.toggle('hidden');
    btnFlutuantePresencial.classList.toggle('hidden');
})
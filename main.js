const horas = document.querySelector(".aguja-hora");
const minutos = document.querySelector(".aguja-minuto");
const segundos = document.querySelector(".aguja-segundo");

setInterval(() => {

    let dia = new Date();
    let hh = dia.getHours() * 30;
    let mm = dia.getMinutes() * 6;
    let ss = dia.getSeconds() * 6;

    horas.style.transform = `rotate(${(hh) + (mm / 12)}deg)`;
    minutos.style.transform = `rotate(${mm}deg)`;
    segundos.style.transform = `rotate(${ss}deg)`;
}, 1000);
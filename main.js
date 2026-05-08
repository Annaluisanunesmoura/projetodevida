const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");

// DATAS FUTURAS
const tempoObjetivo1 = new Date("2026-12-05T00:00:00");
const tempoObjetivo2 = new Date("2026-12-25T00:00:00");
const tempoObjetivo3 = new Date("2027-01-01T00:00:00");
const tempoObjetivo4 = new Date("2027-02-01T00:00:00");

const tempos = [
    tempoObjetivo1,
    tempoObjetivo2,
    tempoObjetivo3,
    tempoObjetivo4
];

function calculaTempo(tempoObjetivo) {

    const agora = new Date();
    const diferenca = tempoObjetivo - agora;

    if (diferenca <= 0) {
        return [0, 0, 0, 0];
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    return [dias, horas, minutos, segundos];
}

function atualizaCronometro() {

    for (let i = 0; i < contadores.length; i++) {

        const [dias, horas, minutos, segundos] = calculaTempo(tempos[i]);

        document.getElementById("dias" + i).textContent = dias;
        document.getElementById("horas" + i).textContent = horas;
        document.getElementById("min" + i).textContent = minutos;
        document.getElementById("seg" + i).textContent = segundos;
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();

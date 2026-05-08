const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// BOTÕES DAS ABAS
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

// DATAS FUTURAS
const tempos = [
    new Date("2026-12-05T00:00:00"),
    new Date("2026-12-25T00:00:00"),
    new Date("2027-01-01T00:00:00"),
    new Date("2027-02-01T00:00:00")
];

// FUNÇÃO DO CRONÔMETRO
function calculaTempo(dataFinal) {

    const agora = new Date();

    const diferenca = dataFinal - agora;

    if (diferenca <= 0) {
        return {
            dias: 0,
            horas: 0,
            minutos: 0,
            segundos: 0
        };
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    return {
        dias,
        horas,
        minutos,
        segundos
    };
}

// ATUALIZA A TELA
function atualizaCronometro() {

    for (let i = 0; i < tempos.length; i++) {

        const tempo = calculaTempo(tempos[i]);

        document.getElementById(`dias${i}`).textContent = tempo.dias;

        document.getElementById(`horas${i}`).textContent =
            String(tempo.horas).padStart(2, "0");

        document.getElementById(`min${i}`).textContent =
            String(tempo.minutos).padStart(2, "0");

        document.getElementById(`seg${i}`).textContent =
            String(tempo.segundos).padStart(2, "0");
    }
}

// INICIA
atualizaCronometro();

setInterval(atualizaCronometro, 1000);

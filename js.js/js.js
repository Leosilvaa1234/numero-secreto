let numeroSecreto = Math.floor(Math.random() * 21);
let tentativas = 3;

const inputChute = document.getElementById("chute");
const botaoChutar = document.getElementById("botaoChutar");
const botaoNovoJogo = document.getElementById("novoJogo");
const mensagem = document.getElementById("mensagem");

botaoChutar.onclick = () => {
  const chute = Number(inputChute.value);

  if (chute < 0 || chute > 20 || isNaN(chute)) {
    mensagem.innerText = "Insira um número válido entre 0 e 20.";
    return;
  }

  tentativas--;

  if (chute === numeroSecreto) {
    mensagem.innerText = "Parabéns! Você acertou o número!";
    finalizarJogo();
  } else if (tentativas === 0) {
    mensagem.innerText = `Você perdeu! O número era ${numeroSecreto}.`;
    finalizarJogo();
  } else {
    mensagem.innerText = chute > numeroSecreto ? "O número é menor." : "O número é maior.";
  }
};

botaoNovoJogo.onclick = () => {
  location.reload();
};

function finalizarJogo() {
  botaoChutar.disabled = true;
  botaoNovoJogo.disabled = false;
  inputChute.disabled = true;
}

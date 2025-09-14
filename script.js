// Pegamos os elementos
const botao = document.getElementById("btnLogin");
const mensagem = document.getElementById("mensagem");
const errorLogin = document.getElementById("error-login");

// Quando clicar no botão
botao.addEventListener("click", function () {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "admin" && senha === "123") {
    errorLogin.style.display = "none"; 
    mensagem.textContent = "✅ Login feito com sucesso!";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "";
    errorLogin.style.display = "block";
  }
});

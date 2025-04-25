// (1) Mostrar mensagem "Olá Mundo"
document.getElementById("helloButton").addEventListener("click", function () {
    const helloOutput = document.getElementById("helloOutput");
    helloOutput.textContent = "Olá Mundo! Seja bem-vindo!";
  });
  
  // (2) Soma de 2 inteiros
  document.getElementById("sumButton").addEventListener("click", function () {
    const num1 = parseInt(document.getElementById("num1").value) || 0;
    const num2 = parseInt(document.getElementById("num2").value) || 0;
    const sumOutput = document.getElementById("sumOutput");
    sumOutput.textContent = `Resultado da soma: ${num1 + num2}`;
  });
  
  // (3) Alterar propriedade de um elemento por ID
  function alterarPorId() {
    const element = document.getElementById("changeById");
    element.style.color = "#e74c3c";
    element.textContent = "Texto alterado por ID!";
  }
  
  // (4) Alterar propriedade de um elemento por Name
  function alterarPorName() {
    const elements = document.getElementsByName("inputName");
    if (elements.length > 0) {
      elements[0].style.backgroundColor = "#f1c40f";
      elements[0].value = "Alterado por Name!";
    }
  }
  
  // (5) Alterar propriedade de um elemento por Class
  function alterarPorClass() {
    const elements = document.getElementsByClassName("changeByClass");
    if (elements.length > 0) {
      elements[0].style.color = "#8e44ad";
      elements[0].textContent = "Texto alterado por Classe!";
    }
  }

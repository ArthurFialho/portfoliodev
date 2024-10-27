function mask() {
  let tel = document.getElementById("fone").value.replace(/\D/g, ""); // Remove caracteres não numéricos

  // Limita a 11 dígitos
  if (tel.length > 11) {
    tel = tel.slice(0, 11);
  }

  // Formatação do telefone
  if (tel.length > 6) {
    // Adiciona o hífen
    tel = tel.replace(/(\d{2})(\d{5})(\d{4})/, "($1)$2-$3");
  } else if (tel.length > 2) {
    // Adiciona o DDD (xx)
    tel = tel.replace(/(\d{2})(\d)/, "($1)$2");
  }

  document.getElementById("fone").value = tel;
}

function showPlaceholder(input) {
  input.placeholder = "(xx)xxxxx-xxxx";
}

function hidePlaceholder(input) {
  if (input.value === "") {
    input.placeholder = "";
  }
}

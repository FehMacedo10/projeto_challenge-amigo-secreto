let listaAmigos = []; // array vazio para armazenar os amigos

function adicionarAmigo() {
  // função para adicionar um amigo na lista
  let nome = document.querySelector("input").value; // pega o valor do input

  if (nome === "") {
    // se o campo estiver vazio, exibe um alerta
    alert("Por favor, insira um nome!"); // alerta
  } else {
    // se não estiver vazio, adiciona o nome na lista
    listaAmigos.push(nome); // push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array
  }

  limparCampo(); // chama a função limparCampo
  adicionarAmigoNaLista(); // chama a função adicionarAmigoNaLista
}

function limparCampo() {
  // função para limpar o campo de input
  nome = document.querySelector("input"); // pega o input
  nome.value = ""; // limpa o campo
}

function adicionarAmigoNaLista() {
  // função para adicionar o amigo na lista
  let lista = document.querySelector("#listaAmigos"); // pega a lista
  lista.innerHTML = ""; // limpa a lista

  for (let i = 0; i < listaAmigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = listaAmigos[i]; // textContent define ou retorna o conteúdo de texto de um nó e de seus descendentes

    // Adiciona o botão de remover
    const deleteBtn = document.createElement("button"); // cria um botão
    deleteBtn.innerHTML = "×"; // define o conteúdo do botão
    deleteBtn.className = "delete-btn"; // define a classe do botão
    deleteBtn.onclick = () => {
      // função para remover o amigo da lista
      listaAmigos.splice(i, 1); // splice adiciona e/ou remove elementos de um array
      adicionarAmigoNaLista(); // chama a função adicionarAmigoNaLista
    };

    item.appendChild(deleteBtn); // appendChild adiciona um elemento filho ao elemento pai
    lista.appendChild(item); // appendChild adiciona um elemento filho ao elemento pai
  }
}

function sortearAmigo() {
  // função para sortear um amigo
  if (listaAmigos.length === 0) {
    // se a lista estiver vazia, exibe um alerta
    alert("A lista está vazia! Adicione pelo menos um amigo."); // alerta
    return; // retorna
  }

  let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); // Math.floor arredonda para baixo o número gerado e Math.random gera um número aleatório entre 0 e 1
  let amigoSorteado = listaAmigos[indiceSorteado]; // pega o amigo sorteado

  // Remove o amigo sorteado da lista
  listaAmigos.splice(indiceSorteado, 1); // splice adiciona e/ou remove elementos de um array

  let resultado = document.getElementById("resultado"); // pega o elemento com o id resultado
  resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`; // exibe o amigo sorteado

  // Atualiza a lista na tela após remover o sorteado
  adicionarAmigoNaLista(); // chama a função adicionarAmigoNaLista
}

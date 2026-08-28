// 2. FUNÇÃO: Criamos a função responsável por buscar os dados
async function buscarUsuario() {
  // Atualizamos o DOM para dar um feedback visual de carregamento
  paragrafo.textContent = 'Carregando...';

  try {
    // 3. AJAX: Fazemos a requisição para uma API externa sem recarregar a página
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const dados = await resposta.json();

    // DOM: Alteramos o texto do parágrafo com o nome retornado da API
    paragrafo.textContent = `Usuário encontrado: ${dados.name}`;
  } catch (erro) {
    // DOM: Em caso de erro, mostramos a mensagem na tela
    paragrafo.textContent = 'Erro ao carregar o usuário.';
  }
}

// DOM: Adicionamos um ouvinte de evento para chamar a FUNÇÃO quando o botão for clicado
botao.addEventListener('click', buscarUsuario);

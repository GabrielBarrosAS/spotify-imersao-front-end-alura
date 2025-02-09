# Spotify Clone - Imersão Front-End Alura

Este projeto foi desenvolvido durante a Imersão Front-End da Alura, com o objetivo de recriar a página inicial do Spotify utilizando HTML, CSS e JavaScript.

## Tecnologias Utilizadas

- **HTML**: Estruturação do conteúdo.
- **CSS**: Estilização e layout da página.
- **JavaScript**: Interatividade e manipulação do DOM.
- **JSON-Server**: Simulação de uma API para busca de artistas.

## Funcionalidades

- **Menu Lateral**: Navegação entre diferentes seções.
- **Barra de Pesquisa**: Busca de artistas utilizando uma API simulada.
- **Responsividade**: Layout adaptável para diferentes tamanhos de tela.

## Como Executar o Projeto

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/GabrielBarrosAS/spotify-imersao-front-end-alura.git
   cd spotify-imersao-front-end-alura
   ```

2. **Instalar o JSON-Server**:
   Certifique-se de ter o Node.js instalado. Em seguida, instale o JSON-Server globalmente:
   ```bash
   npm install -g json-server@0.17.4
   ```

3. **Iniciar a API Simulada**:
   No diretório raiz do projeto, execute:
   ```bash
   json-server --watch api-artists/artists.json --port 3000
   ```
   Isso iniciará a API na porta 3000.

4. **Abrir o Projeto**:
   Abra o arquivo `index.html` em seu navegador preferido para visualizar o projeto em funcionamento.

## Estrutura do Projeto

- `index.html`: Página principal do projeto.
- `src/`: Contém os arquivos de estilo (`styles.css`) e scripts (`script.js`).
- `api-artists/`: Contém o arquivo `artists.json` utilizado pelo JSON-Server para simular a API de artistas.

## Créditos

Este projeto foi desenvolvido durante a Imersão Front-End da Alura, ministrada pelos instrutores:

- [Guilherme Lima](https://github.com/guilhermeonrails)
- [Mayara Cardoso](https://github.com/maykbrito)
- [Fernanda Degolin](https://github.com/fernandadegolin)

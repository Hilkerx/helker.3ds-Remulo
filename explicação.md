// Código 1 (Explicação de const):

const minhaVariavel = 5;
console.log(minhaVariavel); // Saída: 5

// minhaVariavel = 10; // Isso causaria um erro!

//Código 2 (Arrays em JavaScript):

const numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // Saída: 1


//Código 3 (Arrays no React):

const frutas = ["Maçã", "Banana", "Laranja"];

function ListaDeFrutas() {
  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
}

//Código 4 (Uso de .map() para renderizar uma lista):

const numeros = [1, 2, 3, 4, 5];

function ListaDeNumeros() {
  return (
    <ul>
      {numeros.map((num) => (
        <li key={num}>Número: {num}</li>
      ))}
    </ul>
  );
}

//Código 5 (Exemplo prático em React com Vite):

import { useState } from "react";

function ListaDinamica() {
  const [itens, setItens] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <div>
      <h2>Minha Lista</h2>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDinamica;






//exemplo 

import { useState } from "react";

const cards = ["🐱", "🐱", "🐶", "🐶", "🐰", "🐰"];

function App() {
  const [card, setCard] = useState(null);

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>Carta Aleatória</h1>
      <p style={{ fontSize: '50px' }}>{card || "❓"}</p>
      <button onClick={() => setCard(cards[Math.floor(Math.random() * cards.length)])}>
        Gerar Carta
      </button>
    </div>
  );
}

export default App;



// Importação do useState


import { useState } from "react";


//O useState é um hook do React que permite armazenar e atualizar valores dentro do componente funcional.

//Array de Cartas

const cards = ["🐱", "🐱", "🐶", "🐶", "🐰", "🐰"];

//Um array contendo os emojis das cartas disponíveis.

//Componente App

function App() {
    const [card, setCard] = useState(null);

//Define um estado (card) para armazenar a carta atual.

//setCard é a função que atualiza o valor do estado.

//Renderização

return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>Carta Aleatória</h1>
      <p style={{ fontSize: '50px' }}>{card || "❓"}</p>
      <button onClick={() => setCard(cards[Math.floor(Math.random() * cards.length)])}>
        Gerar Carta
      </button>
    </div>
  );


  /*h1: Exibe o título "Carta Aleatória".

p: Mostra a carta sorteada. Se card for null, exibe "❓".

button: Ao ser clicado, executa setCard(cards[Math.floor(Math.random() * cards.length)]), que:

Gera um número aleatório entre 0 e o tamanho do array cards.

Escolhe um emoji aleatório do array e atualiza o estado card.
import React, { useState } from 'react';
import { generateCards } from '../util';
import Card from './Card';

const GameBoard = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const handleCardClick = (card) => {
    if (flippedCards.length === 2 || card.isFlipped || card.isMatched) return;

    const newCards = cards.map((c) =>
      c.id === card.id ? { ...c, isFlipped: true } : c
    );
    setCards(newCards);
    setFlippedCards([...flippedCards, card]);

    if (flippedCards.length === 1) {
      const [firstCard] = flippedCards;
      if (firstCard.img === card.img) {
        setCards((prevCards) =>
          prevCards.map((c) =>
            c.img === firstCard.img || c.img === card.img
              ? { ...c, isMatched: true }
              : c
          )
        );
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((c) =>
              c.id === firstCard.id || c.id === card.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }

    setMoves((prev) => prev + 1); // Aumenta o contador de jogadas
  };

  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setMoves(0);
  };

  return (
    <div className="game-board">
      <p>Número de Jogadas: {moves}</p>
      <button onClick={resetGame}>Recriar Jogo</button>
      <div className="board">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={handleCardClick}
            isFlipped={card.isFlipped || card.isMatched}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
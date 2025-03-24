import React from 'react';
import '../App.css';

const Card = ({ card, onClick, isFlipped }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => onClick(card)}>
      {isFlipped ? (
        <img src={card.img} alt="Card face" />
      ) : (
        // Exibe o fundo da carta
        <div className="card-back">🟦🟥🟥🟦</div>
      )}
    </div>
  );
};

export default Card;
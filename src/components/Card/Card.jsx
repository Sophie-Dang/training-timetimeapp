import React from 'react';
import { useEffect } from 'react';
import styles from './Card.module.scss';

function Card({
  children,
  id,
  addCard, // Reducer props
  cards, // Reducer props
}) {

  const defaultCardObj = {
    id: id,
    isOpen: false,
  }
  const card = cards.length > 0 ? cards.find(card => id === card.id) : defaultCardObj;
  const currentCard = undefined !== card ? card : defaultCardObj;
  const classes = {
    isOpen: currentCard.isOpen === true ? styles.card_open : '',
  };

  useEffect(() => {
    addCard(defaultCardObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <section id={id} className={`${styles.card} ${classes.isOpen}`}>
      {children}
    </section>
  )
}

export default Card;
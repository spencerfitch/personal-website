import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { card, cardContainer } from '../styles/card.module.css'

const Card = ({ children }) => {
  return (
    <div className={cardContainer}>
      <div className={`${card} text-center rounded shadow`}>
        {children}
      </div>
    </div>
  )
}

export default Card;
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { card, cardHover } from '../styles/card.module.css'

const Card = ({ children, className, hover, style }) => {
  const cardClasses = `
    ${card}
    ${hover && cardHover}
    rounded
    shadow
    ${className}
  `;

  return (
    <div className={cardClasses} style={style}>
      {children}
    </div>
  )
}

export default Card;
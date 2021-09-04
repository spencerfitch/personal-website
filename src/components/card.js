import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { card } from '../styles/card.module.css'

const Card = ({ children, className, style }) => {
  return (
    <div className={`${card} text-center rounded shadow ${className}`} style={style}>
      {children}
    </div>
  )
}

export default Card;
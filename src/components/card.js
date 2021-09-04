import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { card } from '../styles/card.module.css'

const Card = ({ children }) => {
  return (
    <div className={`${card} text-center rounded shadow`}>
      {children}
    </div>
  )
}

export default Card;
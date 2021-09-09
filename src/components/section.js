import * as React from 'react';
import { section, sectionTitle } from '../styles/section.module.css';

const Section = ({ name, title, children}) => {
  return (
    <div id={`${name}`.toLowerCase()} className={section}>
      {title && (
        <h1 className={sectionTitle}>
          {name}
        </h1>
      )}
      {children}
    </div>
  )
}

export default Section;
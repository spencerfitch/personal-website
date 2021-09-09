import * as React from 'react';
import { section, sectionTitle } from '../styles/section.module.css';

const Section = ({ name, title, children}) => {
  return (
    <div id={`${name}`.toLowerCase()} className={section}>
      {title && (
        <div className={sectionTitle}>
          <h1>
            {name}
          </h1>
        </div>
      )}
      {children}
    </div>
  )
}

export default Section;
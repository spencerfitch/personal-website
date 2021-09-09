import * as React from 'react';

const Section = ({ name, title, children}) => {
  return (
    <div id={`${name}`.toLowerCase()} style={{paddingTop: '4em', minHeight: '100vh'}}>
      {title && <h1>{name}</h1>}
      {children}
    </div>
  )
}

export default Section;
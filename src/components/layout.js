import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.module.css';
import { body } from '../styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <head>
        <title>Spencer Fitch</title>
      </head>
            
      <body className={body}>
        {children}
      </body>
    </div>
  )
}

export default Layout;
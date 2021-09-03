import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.module.css';
import '../styles/layout.module.css';
import Nav from './nav';

const Layout = ({ children }) => {
  return (
    <div>
      <title>Spencer Fitch</title>
      
      <main>
        <Nav/>
        {children}
      </main>
    </div>
  )
}

export default Layout;
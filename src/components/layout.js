import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.module.css';
import { main } from '../styles/layout.module.css';
import Seo from './seo';
import Nav from './nav';

const Layout = ({ children }) => {
  return (
    <div>
      <Seo />
      
      <main className={main}>
        <Nav/>
        {children}
      </main>
    </div>
  )
}

export default Layout;
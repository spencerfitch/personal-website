import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.module.css';
import '../styles/layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <title>Spencer Fitch</title>
      
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;
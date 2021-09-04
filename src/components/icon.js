import * as React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';

import { icon, iconLink } from '../styles/icon.module.css';


const selectIcon = (name, style, className) => {
  switch (name) {
    case 'github':
      return <FaGithub style={style} className={className} />
    case 'linkExternal':
      return <BiLinkExternal style={style} className={className}/>
  }
}

const Icon = ({ name, size, href }) => {
  const style = size && {height: size, width: size};

  if (href) {
    return (
      <a href={href} rel="noreferer" target="_blank" >
        {selectIcon(name, style, iconLink)}
      </a>
    )
  } else {
    return (
      selectIcon(name, style, icon)
    )
  }
}


export default Icon;
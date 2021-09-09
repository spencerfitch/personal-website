import * as React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';
import { FiFolder } from '@react-icons/all-files/fi/FiFolder';
import { FaCube } from '@react-icons/all-files/fa/FaCube';
import { FaPlane } from'@react-icons/all-files/fa/FaPlane';
import { BsQuestionCircleFill } from '@react-icons/all-files/bs/BsQuestionCircleFill';
import { icon, iconLink } from '../styles/icon.module.css';


const selectIcon = (name, style, className) => {
  switch (name) {
    case 'github':
      return <FaGithub style={style} className={className} />
    case 'linkExternal':
      return <BiLinkExternal style={style} className={className}/>
    case 'linkedin':
      return <FaLinkedin style={style} className={className} />
    case 'email':
      return <MdEmail style={style} className={className} />
    case 'folder':
      return <FiFolder style={style} className={className} />
    case 'cube':
      return <FaCube style={style} className={className} />
    case 'plane':
      return <FaPlane style={style} className={className} />
    case 'question':
      return <BsQuestionCircleFill style={style} className={className} />
    default: 
      console.warn(`icon.js: requested unsupported icon name '${name}'`)
      return <span/>
  }
}

const Icon = ({ name, size, href }) => {
  const style = size && {height: size, width: size};

  if (href) {
    return (
      <a href={href} rel="noreferrer" target="_blank" style={{zIndex: 1, position: 'relative'}}>
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
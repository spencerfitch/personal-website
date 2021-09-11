import * as React from 'react';
import { icon, iconLink } from '../styles/icon.module.css';

// Import icons individually to reduce react-icons size in webpack
import { BiFolder } from '@react-icons/all-files/bi/BiFolder';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';
import { BsQuestionCircleFill } from '@react-icons/all-files/bs/BsQuestionCircleFill';
import { FaCube } from '@react-icons/all-files/fa/FaCube';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaPlane } from '@react-icons/all-files/fa/FaPlane';
import { HiCode } from '@react-icons/all-files/hi/HiCode';
import { MdEmail } from '@react-icons/all-files/md/MdEmail';
import { RiParenthesesLine } from '@react-icons/all-files/ri/RiParenthesesLine';
import { SiAmazonaws } from '@react-icons/all-files/si/SiAmazonaws';
import { SiAnaconda } from '@react-icons/all-files/si/SiAnaconda';
import { SiCplusplus } from '@react-icons/all-files/si/SiCplusplus';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiGit } from '@react-icons/all-files/si/SiGit';
import { SiGooglecloud } from '@react-icons/all-files/si/SiGooglecloud';
import { SiHeroku } from '@react-icons/all-files/si/SiHeroku';
import { SiJava } from '@react-icons/all-files/si/SiJava';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiJupyter } from '@react-icons/all-files/si/SiJupyter';
import { SiPython } from '@react-icons/all-files/si/SiPython';
import { SiVisualstudiocode } from '@react-icons/all-files/si/SiVisualstudiocode';


const icons = {
  'anaconda': SiAnaconda,
  'aws': SiAmazonaws,
  'cplusplus': SiCplusplus,
  'css': SiCss3,
  'cube': FaCube,
  'email': MdEmail,
  'folder': BiFolder,
  'git': SiGit,
  'github': FaGithub,
  'google-cloud': SiGooglecloud,
  'heroku': SiHeroku,
  'java': SiJava,
  'javascript': SiJavascript,
  'jupyter': SiJupyter,
  'link-external': BiLinkExternal,
  'linkedin': FaLinkedin,
  'lisp': RiParenthesesLine,
  'plane': FaPlane,
  'python': SiPython,
  'question': BsQuestionCircleFill,
  'unix': HiCode,
  'vs-code': SiVisualstudiocode,
}

const selectIcon = (name, style, className) => {
  let Tag = icons[name];
  if (Tag) {
    return <Tag style={style} className={className} />;
  } else {
    console.warn (`icon.js: requested unsupported icon name '${name}'`);
    return <span/>;
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
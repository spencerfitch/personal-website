import * as React from 'react';
import "bootstrap/js/src/collapse.js";
import { bgTranslucent } from '../styles/global.module.css';
import {  
  show, 
  hide,
  shadow,
} from '../styles/nav.module.css';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
      shadow: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    const currPos = document.body.getBoundingClientRect().top
    this.setState({
      scrollPos: currPos,
      show: currPos > scrollPos || currPos > -20,
      shadow: currPos < -20
    });
  }

  render() {
    const navClasses = `
      navbar
      navbar-expand-lg
      fixed-top
      navbar-light
      ${bgTranslucent}
      ${(this.state.show) ? show : hide}
      ${(this.state.shadow) ? shadow : ''}
    `
    return (
      <nav className={navClasses}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Spencer Fitch
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#about">About</a>
              <a className="nav-link" href="#skills">Skills</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}


export default Nav;
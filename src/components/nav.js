import * as React from 'react';
import "bootstrap/js/src/collapse.js";
import { bgTranslucent } from '../styles/global.module.css';
import { show, hide, shadow, resume } from '../styles/nav.module.css';
import { StaticImage } from 'gatsby-plugin-image';


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
          <a className="navbar-brand" href="/" style={{width: '3em', padding: 0, margin: 0}}>
            <StaticImage src="../images/icon.png" alt="Spencer Fitch website logo" style={{position: 'fixed', left: 0, top: 0, height: '2.7em', width: '2.7em', marginLeft: '.5em'}}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#skills">Skills</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
            <a className={`${resume} btn`} href="/resume.pdf" style={{widht: '3em'}}>
              Resume
            </a>
          </div>
        </div>
      </nav>
    )
  }
}


export default Nav;
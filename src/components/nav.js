import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { bgTranslucent } from '../styles/global.module.css';
import { show, hide, shadow, logo, resume } from '../styles/nav.module.css';
import { StaticImage } from 'gatsby-plugin-image';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0,
      shadow: false,
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
    const currPos = document.body.getBoundingClientRect().top;
    this.setState({
      scrollPos: currPos,
      show: currPos > scrollPos || currPos > -20,
      shadow: currPos < -20
    });
  }

  render() {
    const navClasses = `
      ${bgTranslucent}
      ${(this.state.show) ? show : hide}
      ${this.state.shadow && shadow}
    `;

    return (
      <Navbar expand="sm" fixed="top" className={navClasses}>
        <div className="container-fluid">
          <Navbar.Brand href="#">
            <StaticImage 
              src="../images/icon.png" 
              alt="Spencer Fitch website logo" 
              className={logo}
              placeholder='blurred'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-collapse" />
          <Navbar.Collapse id="navbar-collapse">
            <div className="navbar-nav mx-auto">
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#skills">Skills</a>
              <a className="nav-link" href="#projects">Projects</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
            <a className={`btn ${resume}`} href="/resume.pdf">
              Resume
            </a>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}


export default Nav;
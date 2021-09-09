import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav as BsNav } from 'react-bootstrap' ;
import { bgTranslucent, btnGradientOutline } from '../styles/global.module.css';
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
      <Navbar id="navbar-test" expand="sm" fixed="top" className={navClasses} collapseOnSelect>
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
            <BsNav className="mx-auto">
              <BsNav.Link className="nav-link" href="#about" active={false}>About</BsNav.Link>
              <BsNav.Link className="nav-link" href="#skills" active={false}>Skills</BsNav.Link>
              <BsNav.Link className="nav-link" href="#projects" active={false}>Projects</BsNav.Link>
              <BsNav.Link className="nav-link" href="#contact" active={false}>Contact</BsNav.Link>
            </BsNav>
            <a className={`btn ${btnGradientOutline} ${resume}`} href="/resume.pdf" target="_blank" rel="noopener noreferrer" >
              Resume
            </a>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}


export default Nav;
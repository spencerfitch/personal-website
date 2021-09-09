import * as React from "react";
import { Link } from "gatsby";
import '../styles/global.module.css';
import { StaticImage } from "gatsby-plugin-image";
import { 
  main, 
  logoContainer, 
  logoImage, 
  logoTitle, 
  message,
  home } from "../styles/404.module.css";

const NotFoundPage = () => {
  return (
    <main className={main}>
      <title>Not found</title>

      <Link to="/" className={logoContainer} >
        <div className={logoImage}>
          <StaticImage 
            src="../images/icon.png" 
            alt="Spencer Fitch website logo"
            className={logoImage} 
            placeholder='blurred'
          />
        </div>
        <h1 className={logoTitle}>
          spencerfitch.com
        </h1>
      </Link>
      <div className={message}>
        <h1>
          Uh oh, page not found
        </h1>
        <p>
          Sorry, I don't seem to have the page you're looking for on my website.
          <br />
          Click the button below to go back to the home page.
        </p>
      </div>
      <Link to="/" className={`${home} btn`}>Go Home</Link>
      
    </main>
  )
}

export default NotFoundPage;

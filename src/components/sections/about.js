import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { StaticImage } from 'gatsby-plugin-image';
import Education from '../education';
import { aboutContainer, aboutText, portrait } from '../../styles/about.module.css';


const About = () => {
  const aboutQuery = graphql`
    query {
      mdx(fileAbsolutePath: {regex: "/content/about/about.mdx/"}) {
        body
      }
    }
  `;
  
  return (
    <div className={aboutContainer}>
      <div className={aboutText}>
        <StaticQuery
          query={aboutQuery}
          render={data => (
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          )}
        />
      </div>
      <StaticImage
        src="../../images/portrait.jpg" 
        alt="Portrait of Spencer Fitch" 
        className={`${portrait}`}
        placeholder='blurred'
      />
    </div>
  );
}

export default About;
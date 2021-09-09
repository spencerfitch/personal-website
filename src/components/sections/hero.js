import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { btnGradientOutline } from '../../styles/global.module.css';
import { container, introduction, title, subtitle, content, btnHero } from '../../styles/hero.module.css';

const Hero = () => {
  const heroQuery = graphql`
    query {
      mdx(fileAbsolutePath: {regex: "/hero.mdx/"}) {
        frontmatter {
          introduction
          title
          subtitle
        }
        body
      }
    }
  `;

  const mdxPtag = props => (<p className={content} {...props}/>);

  return (
      <StaticQuery 
        query={heroQuery}
        render={data => (
          <div className={container}>
            <h4 className={introduction}>
              {data.mdx.frontmatter.introduction}
            </h4>
            <h1 className={`${title} display-1 fw-bold`}>
              {data.mdx.frontmatter.title}
            </h1>
            <h2 className={`${subtitle}`}>
              {data.mdx.frontmatter.subtitle}
            </h2>
            <MDXProvider components={{p: mdxPtag}}>
              <MDXRenderer>
                {data.mdx.body}
              </MDXRenderer>
            </MDXProvider>
            <a className={`btn ${btnGradientOutline} ${btnHero}`} href="#about">
              Learn more about me
            </a>
          </div>
        )}
      />
  )
}

export default Hero;
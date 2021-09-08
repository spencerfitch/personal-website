import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { container, introduction, title, subtitle, content} from '../../styles/hero.module.css';

const Hero = () => {
  const heroQuery = graphql`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/hero/"}}) {
        nodes {
          frontmatter {
            introduction
            title
            subtitle
          }
          body
        }
      }
    }
  `;

  const mdxPtag = props => (<p className={`${content} text-muted`} {...props}/>);

  return (
      <StaticQuery 
        query={heroQuery}
        render={data => {
          console.log(data);
          const node = data.allMdx.nodes[0];
          return (
            <div className={container}>
              <h4 className={`${introduction} text-muted`}>
                {node.frontmatter.introduction}
              </h4>
              <h1 className={`${title} display-1 fw-bold`}>
                {node.frontmatter.title}
              </h1>
              <h2 className={`${subtitle}`}>
                {node.frontmatter.subtitle}
              </h2>
              <MDXProvider components={{p: mdxPtag}}>
                <MDXRenderer>
                  {node.body}
                </MDXRenderer>
              </MDXProvider>
            </div>
          );
        }}
      />
  )
}

export default Hero;
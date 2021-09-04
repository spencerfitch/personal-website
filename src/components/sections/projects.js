import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { mdx, MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Card from '../card';
import Icon from '../icon';
import { link } from '../../styles/global.module.css';
import { tag } from '../../styles/project.module.css';


const Projects = () => {
  const projectQuery = graphql`
    query {
      allMdx(
        sort: {fields: frontmatter___order}
        filter: {fileAbsolutePath: {regex: "/projects/"}}
      ) {
        nodes {
          frontmatter {
            demo
            github
            show
            tags
            title
          }
          body
        }
      }
    }
  `;

  const mdxPtag = props => (<p style={{margin: 0}} {...props}/>);

  return (
    <StaticQuery
      query={projectQuery}
      render={data => (
        data.allMdx.nodes.map((node, idx) => (
          node.frontmatter.show &&
            <Card key={idx}>
              <h3>
                <a 
                  href={(node.frontmatter.demo) ? node.frontmatter.demo : node.frontmatter.github}
                  rel="noreferrer"
                  target="_blank"
                  className={link}
                >
                  {node.frontmatter.title}
                </a>
              </h3>
              
              {(!node.frontmatter.github) ? null :
                <Icon
                  name="github" 
                  href={node.frontmatter.github}/>
              }
              {(!node.frontmatter.demo) ? null :
                <Icon
                  name="linkExternal"
                  href={node.frontmatter.demo}/>
              }

              <MDXProvider components={{p: mdxPtag}}>
                <MDXRenderer>
                  {node.body}
                </MDXRenderer>
              </MDXProvider>

              {node.frontmatter.tags.map((elem, idx) => (
                <span className={tag}>
                  {elem}
                </span>
              ))}
            </Card>
      )))}
    />
  )
}

export default Projects;
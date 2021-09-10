import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Card from '../card';
import Icon from '../icon';
import { link } from '../../styles/global.module.css';
import { projectContainer, project, projectTitle, linkContainer, tagContainer, tag } from '../../styles/project.module.css';


const Projects = () => {
  const projectQuery = graphql`
    query {
      allMdx(
        sort: {fields: frontmatter___order}
        filter: {fileAbsolutePath: {regex: "/projects/"}}
      ) {
        nodes {
          frontmatter {
            show
            title
            icon
            demo
            github
            tags
          }
          body
        }
      }
    }
  `;

  const mdxPtag = props => (<p style={{margin: 0}} {...props}/>);

  return (
    <div className={projectContainer}>
      <StaticQuery
        query={projectQuery}
        render={data => (
          data.allMdx.nodes.map((node, idx) => (
            node.frontmatter.show && (
              <Card key={idx} className={project} hover>
                <div>

                  <div>
                    <Icon
                      name={(node.frontmatter.icon) ? node.frontmatter.icon : 'folder'}
                      size="2.7em"
                      style={{backgroundColor: 'blue !important'}}
                    />
                    <div className={linkContainer}>
                      {node.frontmatter.github && (
                        <Icon
                          name="github" 
                          href={node.frontmatter.github}
                          size="2em"/>
                      )}
                      {node.frontmatter.demo && (
                        <Icon
                          name="link-external"
                          href={node.frontmatter.demo}
                          size="2em"/>
                      )}
                    </div>
                  </div>

                  <h3 className={projectTitle}>
                    <a 
                      href={(node.frontmatter.demo) ? node.frontmatter.demo : node.frontmatter.github}
                      rel="noreferrer"
                      target="_blank"
                      className={link}
                    >
                      {node.frontmatter.title}
                    </a>
                  </h3>  

                  <MDXProvider components={{p: mdxPtag}}>
                    <MDXRenderer>
                      {node.body}
                    </MDXRenderer>
                  </MDXProvider>

                </div>

                <div className={tagContainer}>
                  {node.frontmatter.tags.map((elem, idx) => (
                    <span key={idx} className={tag}>
                      {elem}
                    </span>
                  ))}
                </div>
                
              </Card>
        ))))}
      />
    </div>
  )
}

export default Projects;
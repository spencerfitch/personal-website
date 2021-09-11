import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Card from '../card';
import Icon from '../icon';
import { skillContainer, centerContent, language, languageTitle, experience, tool } from '../../styles/skills.module.css';


class Skills extends React.Component {
  render() {
    const skillQuery = graphql`
      query {
        allMdx(
          filter: {fileAbsolutePath: {regex: "/skills/languages/"}}
          sort: {fields: frontmatter___experience, order: DESC}
        ) {
          nodes {
            frontmatter {
              language
              icon
              experience
              libraries
            }
          }
        }
        mdx(
          fileAbsolutePath: {regex: "/content/skills/tools.mdx/"}
        ) {
          frontmatter {
            tools
          }
        }
      }
    `;

    const experienceLabels = ['None', 'Proficient', 'Intermediate', 'Experienced', 'Advanced', 'Expert'];
    const toolIconName = (tool) => (tool.replace(/\s+/g, '-').toLowerCase());

    return (
      <StaticQuery
        query={skillQuery}
        render={data => (
          <div className={skillContainer}>
            <Card className={centerContent}>
              <h2>Languages</h2>

              <div>
                {data.allMdx.nodes.map((lang, idx) => (
                  <div key={idx} className={language}>

                    <h4 className={languageTitle} >
                      <Icon name={lang.frontmatter.icon} size="1.2em"/>
                      <span>{lang.frontmatter.language}</span>
                    </h4>

                    <div className={`progress ${experience}`}>
                      <div 
                        className="progress-bar" 
                        style={{width: `${(lang.frontmatter.experience/5*100).toFixed(0)}%`}} 
                        aria-valuenow={lang.frontmatter.experience} 
                        aria-valuemin="0" 
                        aria-valuemax="5"
                      >
                        {experienceLabels[lang.frontmatter.experience]}
                      </div>
                    </div>

                    <p>
                      {lang.frontmatter.libraries && lang.frontmatter.libraries.join(', ')}
                    </p>

                  </div>
                ))}  
              </div>
            </Card>

            <Card className={centerContent}>
              <h2>Tools and Platforms</h2>
              
              <div>
                {data.mdx.frontmatter.tools.map((elem, idx) => (
                  <h4 className={tool} key={idx}>
                    <Icon name={toolIconName(elem)} size="1.2em" />
                    <span>{elem}</span>
                  </h4>
                ))}
              </div>
            </Card>

          </div>
        )}
      />
    )
  }
}

export default Skills;
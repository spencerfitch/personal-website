import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { languageContainer, language, experience, libraries } from '../../styles/skills.module.css';

class Skills extends React.Component {
  render() {
    const languageSkillQuery = graphql`
      query {
        allMdx(
          filter: {fileAbsolutePath: {regex: "/skills/languages/"}}
          sort: {fields: frontmatter___experience, order: DESC}
        ) {
          nodes {
            frontmatter {
              language
              experience
              libraries
            }
          }
        }
      }
    `;

    const experienceLabels = ['None', 'Familiar', 'Intermediate', 'Intermediate', 'Experienced', 'Expert']

    return (
      <div>
        <StaticQuery
          query={languageSkillQuery}
          render={data => (
            data.allMdx.nodes.map((lang, idx) => (
              <div key={idx} className={languageContainer}>
                <h4 className={language}>
                  {lang.frontmatter.language}
                </h4>
                <div className={`progress ${experience}`}>
                  <div 
                    className="progress-bar" 
                    role="progressbar" 
                    style={{width: `${(lang.frontmatter.experience/5*100).toFixed(0)}%`}} 
                    aria-valuenow={lang.frontmatter.experience} 
                    aria-valuemin="0" 
                    aria-valuemax="5"
                  >
                    {experienceLabels[lang.frontmatter.experience]}
                  </div>
                </div>
                <p className={libraries}>
                  {lang.frontmatter.libraries && lang.frontmatter.libraries.join(', ')}
                </p>
              </div>
            ))
          )}
        />
      </div>
    )
  }
}

export default Skills;
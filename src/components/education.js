import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Card from './card';
import { container, education, school, type, major, courses } from '../styles/education.module.css';

const Education = () => {
  const educationQuery = graphql`
    query {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/education/"}}
        sort: {fields: frontmatter___order}
      ) {
        nodes {
          frontmatter {
            type
            major
            school
            end(formatString: "MMMM YYYY")
            start(formatString: "MMMM YYYY")
            gpa
            courses
          }
        }
      }
    }
  `;

  const formatDate = (date) => (date.slice(0,4) + date.slice(-5));

  return (
    <div className={container}>
      <StaticQuery
        query={educationQuery}
        render={data => (
          data.allMdx.nodes.map((node, idx) => (
            <Card key={idx} className={education}>
              <h5 className={school}>
                {node.frontmatter.school}
              </h5>
              <h4 className={type}>
                {node.frontmatter.type}
              </h4>
              <h3 className={major}>
                {node.frontmatter.major}
              </h3>
              <h6>
                {`${formatDate(node.frontmatter.start)} – ${formatDate(node.frontmatter.end)}`}
              </h6>
              <h6>
                GPA: {node.frontmatter.gpa.toFixed(2)}
              </h6>
              <div className={courses}>
                Notable courses:
                <ul>
                  {node.frontmatter.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))
        )}
      />
    </div>
  )
}

export default Education;
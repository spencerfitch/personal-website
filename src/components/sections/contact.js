import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Icon from '../icon';

const Contact = () => {
  const query = graphql`
    query {
      mdx(fileAbsolutePath: {regex: "/content/contact.mdx/"}) {
        frontmatter {
          email
          linkedin
          github
        }
      }
    }
  `;

  return (
    <div>
      <StaticQuery
        query={query}
        render={data => (
          <>
            <Icon
              name="email" 
              href={`mailto:${data.mdx.frontmatter.email}`}
            />
            <Icon
              name="github"
              href={data.mdx.frontmatter.github}
            />
            <Icon
              name="linkedin"
              href={data.mdx.frontmatter.linkedin}
            />
          </>
        )}
      />
    </div>
  )
}

export default Contact;
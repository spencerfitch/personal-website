import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { OutboundLink } from 'gatsby-plugin-gtag';

import Icon from '../icon';
import { link } from '../../styles/global.module.css';
import { contactIntro, linkContainer, contactLink } from '../../styles/contact.module.css';


const ContactLink = ({ href, iconName, text }) => {
  return (
    <div className={contactLink}>
      <OutboundLink href={href} className={link} target="_blank" rel="noreferrer">
        <Icon
          name={iconName} 
          size="1.5em"
        />
        <span>
          {text}
        </span>
      </OutboundLink>
    </div>
  )
}

const Contact = () => {
  const query = graphql`
    query {
      mdx(fileAbsolutePath: {regex: "/content/contact.mdx/"}) {
        frontmatter {
          email
          linkedin
          github
        }
        body
      }
    }
  `;

  return (
    <StaticQuery
      query={query}
      render={data => (
        <>
          <div className={contactIntro}>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </div>
          <div className={linkContainer}>
            <ContactLink
              href={`mailto:${data.mdx.frontmatter.email}`}
              iconName="email"
              text={data.mdx.frontmatter.email}
            />
            <ContactLink
              href={data.mdx.frontmatter.github}
              iconName="github"
              text={data.mdx.frontmatter.github.slice(8)}
            />
            <ContactLink
              href={data.mdx.frontmatter.linkedin}
              iconName="linkedin"
              text={data.mdx.frontmatter.linkedin.slice(8)}
            />
          </div>
        </>
      )}
    />
  )
}

export default Contact;
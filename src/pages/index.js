import * as React from 'react';

import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Skills from '../components/sections/skills';
import Projects from '../components/sections/projects';
import Section from '../components/section';
import Contact from '../components/sections/contact';

const IndexPage = () => {
  return (
    <Layout>
      <Section name="Hero">
        <Hero />
      </Section>

      <Section name="About" title>
        <About />
      </Section>

      <Section name="Skills" title>
        <Skills />
      </Section>

      <Section name="Projects" title>
        <Projects />
      </Section>

      <Section name="Contact" title>
        <Contact />
      </Section>
    </Layout>
  )
}

export default IndexPage

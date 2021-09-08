import * as React from 'react';

import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
    </Layout>
  )
}

export default IndexPage

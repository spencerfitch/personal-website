import * as React from 'react';

import Layout from '../components/layout';
import Card from '../components/card';

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="w-100 text-center bg-success">
        Hello World!
      </h1>
      
      {[...Array(20).keys()].map(i => (
        <Card key={i}>
          Card
        </Card>
      ))}
    </Layout>
  )
}

export default IndexPage

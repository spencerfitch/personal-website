import * as React from 'react';

import Layout from '../components/layout';
import Card from '../components/card';

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <h1 className="w-100 text-center">
          Hello World!
        </h1>
        {[...Array(20).keys()].map(i => (
          <Card key={i}>
            Card
          </Card>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

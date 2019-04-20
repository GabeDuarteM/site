import React from 'react'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Introduction from '../components/Introduction'
import About from '../components/About'
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={['Gabriel Duarte', 'Gabriel', 'Duarte']} />
    <Introduction />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage

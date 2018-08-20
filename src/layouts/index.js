import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children, data }) => {
  const logo = data.logo.edges.map(image => image.node.resize.src)[0]
  return (
    <div>
      <Helmet
        title="Jake and Katrina"
        meta={[
          { name: 'description', content: 'A website about us :)' },
          { name: 'keywords', content: 'blog, lifestyle' },
        ]}
      />
      <Header logo={logo} />
      {children()}
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query MainQuery {
    logo: allImageSharp(filter: { id: { regex: "/logo.png/" } }) {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 240, height: 100) {
              src
            }
          }
        }
      }
    }
  }
`

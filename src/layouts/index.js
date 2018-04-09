import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'

const TemplateWrapper = ({ children, data }) => {
  const logo = data.logo.edges.map(image => image.node.resize.src)[0];
  return (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header logo={logo}/>
    <div>
      {children()}
    </div>
  </div>
)}

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
}`

import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const Hero = styled('div')({
  background: '#FFF',
  position: 'absolute',
  width: '100%',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Image = styled('img')({
  width: '100%',
  height: '40em',
  objectFit: 'cover'
})

export default class IndexPage extends Component {
  render() {
    const banner = this.props.data.banner.edges.map(image => image.node.resize.src)[0];
    return (
      <div>
        <Hero>
          <Image src={banner}/>
        </Hero>
      </div>
    )
  }
}

export const pageQuery = graphql`
query IndexQuery {
  banner: allImageSharp(filter: { id: { regex: "/banner/" } }) { 
    edges {
      node {
        ... on ImageSharp {
          resize(width: 1440, height: 1080) {
            src
          }
        }
      }
    }
  }
}`

import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { Grid, Row, Col } from 'react-flexbox-grid'
import HeartIcon from 'react-icons/lib/fa/heart'
import PaperIcon from 'react-icons/lib/fa/newspaper-o'
import PlaneIcon from 'react-icons/lib/fa/plane'
import { FeaturesSection } from '../components/FeaturesSection'

const Hero = styled('div')({
  background: '#FFF',
  position: 'relative',
  width: '100%',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-108px',
})

const Image = styled('img')({
  width: '100%',
  height: '40em',
  objectFit: 'cover',
})

const Container = styled('div')(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3em',
  },
  ({ backgroundColor }) => ({
    backgroundColor: backgroundColor || '#FFF',
  })
)

const LargeHeader = styled('h1')({
  fontSize: '5em',
  fontWeight: '400',
  paddingTop: '0.5em',
})

const SubHeader = styled('h2')({
  padding: '0.5em',
})

const CenteredRow = styled(Row)({
  justifyContent: 'center',
})

const Photos = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
})

const Photo = styled('img')({
  margin: '2em',
  boxShadow: '0 0 5px #666',
})

export default class IndexPage extends Component {
  render() {
    const banner = this.props.data.banner.edges.map(
      image => image.node.resize.src
    )[0]
    const featuredPhotos = this.props.data.featuredPhotos.edges.map(
      image => image.node.resize.src
    )

    return (
      <div>
        <Hero>
          <Image src={banner} />
        </Hero>
        <FeaturesSection />
        <Container backgroundColor="#f0f0f0">
          <Grid fluid>
            <CenteredRow>
              <LargeHeader>5</LargeHeader>
            </CenteredRow>
            <CenteredRow>
              <SubHeader>years and counting...</SubHeader>
            </CenteredRow>
            <Row>{featuredPhotos.map(photo => <Photo src={photo} />)}</Row>
          </Grid>
        </Container>
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
    featuredPhotos: allImageSharp(filter: { id: { regex: "/featured/" } }) {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 200, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`

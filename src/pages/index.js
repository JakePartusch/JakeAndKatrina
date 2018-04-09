import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { Grid, Row, Col } from 'react-flexbox-grid';
import HeartIcon from 'react-icons/lib/fa/heart';
import PaperIcon from 'react-icons/lib/fa/newspaper-o';
import PlaneIcon from 'react-icons/lib/fa/plane';

const Hero = styled('div')({
  background: '#FFF',
  position: 'relative',
  width: '100%',
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '-108px'
})

const Image = styled('img')({
  width: '100%',
  height: '40em',
  objectFit: 'cover'
})

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const LargeHeader = styled('h1')({
  fontSize: '5em',
  fontWeight: '400',
  padding: '0.5em'
});

const SubHeader = styled('h2')({
  padding: '0.5em'
})

const CenteredRow = styled(Row)({
  justifyContent: 'center'
})

const CenteredCol = styled(Col)({
  justifyContent: 'center',
  textAlign: 'center'
})

const Features = styled(Row)({
  maxWidth: '960px',
  padding: '0.5em'
})

export default class IndexPage extends Component {
  render() {
    const banner = this.props.data.banner.edges.map(image => image.node.resize.src)[0];
    return (
      <div>
        <Hero>
          <Image src={banner}/>
        </Hero>
        <Container>
            <Grid fluid>
              <CenteredRow>
                <LargeHeader>Jake & Katrina</LargeHeader>
              </CenteredRow>
              <CenteredRow>
                <SubHeader>on a journey through life together...</SubHeader>
              </CenteredRow>
              <Features>
                <CenteredCol md={4}>
                  <HeartIcon size={75} color='red' style={{margin: '1em'}}/>
                  <h2>Photo Albums</h2>
                  <p>From Easter in Albion to New Year’s in Copenhagen, take a peek at our life through photographs.</p>
                </CenteredCol>
                <CenteredCol md={4}>
                  <PaperIcon size={75} style={{margin: '1em'}}/>
                  <h2>Blog</h2>
                  <p>We aren’t the Wall Street Journal, but we might post something interesting from time to time.</p>
                </CenteredCol>
                <CenteredCol md={4}>
                  <PlaneIcon size={75} color="steelblue" style={{margin: '1em'}}/>
                  <h2>Travel</h2>
                  <p>Watch our mapped destinations expand as we attempt to explore the world one trip at a time.</p>
                </CenteredCol>
              </Features>
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
}`

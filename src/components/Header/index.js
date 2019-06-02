import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const LargeHeader = styled('h1')({
  fontSize: '1.5em',
  paddingLeft: '2em',
  paddingTop: '0.6em',
})

const Container = styled('div')({
  background: '0 0',
  zIndex: '9',
  position: 'relative',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  display: 'flex',
  height: '60px',
  overflowX: 'scroll',
})

const Header = ({ logo }) => (
  <Container>
    <h1>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img style={{ maxHeight: '60px' }} src={logo} />
      </Link>
    </h1>
    <LargeHeader>
      <Link
        to="/"
        style={{
          color: 'rgba(0,0,0,0.8)',
          textDecoration: 'none',
        }}
      >
        Home
      </Link>
    </LargeHeader>
    <LargeHeader>
      <Link
        to="/blog"
        style={{
          color: 'rgba(0,0,0,0.8)',
          textDecoration: 'none',
        }}
      >
        Blog
      </Link>
    </LargeHeader>
    <LargeHeader>
      <a
        href="https://milo.partus.ch"
        style={{
          color: 'rgba(0,0,0,0.8)',
          textDecoration: 'none',
        }}
      >
        Milo
      </a>
    </LargeHeader>
    <LargeHeader>
      <a
        href="https://www.google.com/maps/d/u/0/viewer?mid=1qoBzO7f1R3L928E2Wjr9J1hVX4Y&ll=23.03214354792023%2C-48.34492375000002&z=3"
        style={{
          color: 'rgba(0,0,0,0.8)',
          textDecoration: 'none',
        }}
      >
        Map
      </a>
    </LargeHeader>
  </Container>
)

export default Header

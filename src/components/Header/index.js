import React from 'react'
import Link from 'gatsby-link'

const Header = ({logo}) => (
  <div
    style={{
      background: '0 0',
      zIndex: '9',
      position: 'relative',
      backgroundColor: 'rgba(255, 255, 255, 0.9)'
    }}
  >
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
         <img style={{ margin: '0'}} src={logo}/>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header

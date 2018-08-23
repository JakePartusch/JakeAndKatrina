import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const BlogContainer = styled('div')({
  display: 'flex',
  'flex-wrap': 'wrap',
  '-webkit-box-pack': 'start',
  'justify-content': 'center',
  background: '#eee',
})

const BlogEntry = styled('a')({
  color: 'inherit',
  width: '50%',
  'max-width': '100%',
  display: 'flex',
  'text-decoration': 'none',
})

const Blog = styled('article')({
  'background-color': 'white',
  'box-sizing': 'border-box',
  width: '100%',
  display: 'flex',
  'flex-direction': 'column',
  'overflow-x': 'hidden',
  'font-size': '16px',
  position: 'relative',
  margin: '0.5rem',
  transition: '225ms ease-in-out',
  outline: 'rgba(0, 0, 0, 0.15) solid 1px',
  padding: '1em',
  maxWidth: '400px',
})

const Title = styled('h2')({
  'font-weight': '400',
  margin: '0.5rem 0px',
})

const BlogDate = styled('h3')({
  'font-size': '16px',
  'text-transform': 'uppercase',
  margin: '0px 0px 0.5rem',
})

const Preview = styled('p')({
  'word-wrap': 'break-word',
  'word-break': 'break-word',
})

const CoverPhoto = styled('img')({})

const Anchor = styled(Link)({
  '&:any-link': {
    textDecoration: 'none',
    color: 'hsla(0,0%,0%,0.8)',
  },
})

export default class BlogPosts extends React.Component {
  render() {
    console.log(this.props)
    const { data } = this.props

    return (
      <BlogContainer>
        {data.blogPosts.edges.map(blog => (
          <Anchor to={`/blog/${blog.node.id}`}>
            <Blog>
              <CoverPhoto src={blog.node.coverPhoto.resolutions.src} />
              <Title>{blog.node.title}</Title>
              <BlogDate>{new Date(blog.node.date).toDateString()}</BlogDate>
              <Preview>{blog.node.body.childMarkdownRemark.excerpt}</Preview>
            </Blog>
          </Anchor>
        ))}
      </BlogContainer>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostsQuery {
    blogPosts: allContentfulBlogPost {
      edges {
        node {
          id
          title
          author {
            name
          }
          date
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
          coverPhoto {
            resolutions(width: 600, height: 400) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

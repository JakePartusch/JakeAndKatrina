import React from 'react'
import styled from 'react-emotion'

const BlogPostContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#eee',
})

const Content = styled('div')({
  maxWidth: '960px',
  margin: 'auto',
  backgroundColor: 'rgba(255,255,255,0.9)',
  padding: '1.5em',
  margin: '0.5em',
  outline: 'rgba(0,0,0,0.15) solid 1px',
})

const CoverPhoto = styled('img')({})

const LargeHeader = styled('h1')({
  fontSize: '3em',
  fontWeight: '100',
  paddingTop: '0.5em',
})

const Author = styled('h3')({
  fontSize: '16px',
})

const BlogDate = styled('h3')({
  fontSize: '16px',
  textTransform: 'uppercase',
  margin: '0px 0px 0.5rem',
})

export default class BlogPost extends React.Component {
  render() {
    const { blogPost } = this.props.data
    return (
      <BlogPostContainer>
        <Content>
          <CoverPhoto src={blogPost.coverPhoto.resolutions.src} />
          <LargeHeader>{blogPost.title}</LargeHeader>
          <Author>{`by: ${blogPost.author.name}`}</Author>
          <BlogDate>{new Date(blogPost.date).toDateString()}</BlogDate>
          <p
            dangerouslySetInnerHTML={{
              __html: blogPost.body.childMarkdownRemark.html,
            }}
          />
        </Content>
      </BlogPostContainer>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    blogPost: contentfulBlogPost(id: { eq: $slug }) {
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
        resolutions(width: 900) {
          width
          height
          src
          srcSet
        }
      }
    }
  }
`

const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    resolve(
      graphql(
        `
          {
            blogPosts: allContentfulBlogPost {
              edges {
                node {
                  id
                }
              }
            }
          }
    `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.blogPosts.edges.forEach(edge => {
            createPage({
              path: `/blog/${edge.node.id}`, // required
              component: blogPostTemplate,
              context: {
                slug: edge.node.id,
              },
            })
        })

        return
      })
    )
  })
}
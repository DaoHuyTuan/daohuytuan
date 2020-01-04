const _ = require("lodash")
module.exports = {
  createBlogPages: async function(graphql, createPage, template) {
    await graphql(
      `
        {
          postsRemark: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                }
              }
            }
          }
        }
      `
    ).then(res => {
      if (res.errors) {
        throw res.errors
      }
      // Create blog posts pages.
      const posts = res.data.postsRemark.edges

      posts.forEach(async (post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        return createPage({
          path: post.node.fields.slug,
          component: template,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    })
  },
}

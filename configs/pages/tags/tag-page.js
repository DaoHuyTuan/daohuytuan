const _ = require("lodash")
module.exports = {
    createTagPages: async function(graphql, createPage, tagTemplate) {
    await graphql(
      `
        {
          tagsGroup: allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
            }
          }
        }
      `
    ).then(res => {
      if (res.errors) {
        throw res.errors
      }
      // Make tag pages
      const tags = res.data.tagsGroup.group
      tags.forEach(tag => {
        return createPage({
          path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
          component: tagTemplate,
          context: {
            tagName: tag.fieldValue,
          },
        })
      })
    })
  },
}

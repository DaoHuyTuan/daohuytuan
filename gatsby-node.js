const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")
const { createTagPages } = require("./configs/pages/tags/tag-page")
const { createBlogPages } = require("./configs/pages/blog/blog-page")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
  const tagTemplate = path.resolve("src/templates/tags/tags.js")

  const createAllPage = () => Promise.all([
    createBlogPages(graphql, createPage, blogTemplate),
    createTagPages(graphql, createPage, tagTemplate),
  ]).then(result => {
    return result
  }).catch(error => {
    console.log(error)
  })
  await createAllPage();
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

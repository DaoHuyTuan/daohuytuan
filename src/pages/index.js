import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ListBlogs from "../components/ListBlogs"
import Bio from "../components/bio"
import SocialNetworth from "../components/atoms/SocialNetworth"
import GlobalStyle from "../theme/GlobalStyle"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO title="Hy tứng's Blog" />
          <Bio />
          <SocialNetworth />
          <ListBlogs posts={posts} />
          <GlobalStyle />
        </Layout>
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { rhythm } from "../../utils/typography"
import { TagLabel, TagStyle, TagWrapper } from "../../components/atoms/Tag/Tag.style";
const TagsPage = ({ ...props }) => {
  const { path, data, location, pageContext } = props
  console.log(props)
  const [arrayPosts, setArrayPosts] = useState(data.allMarkdownRemark.edges)
  return (
    <Layout location={location} title="Tags">
      <TagLabel>{pageContext.tagName}</TagLabel>
      <div>
        {arrayPosts.map(post => {
          console.log(post)
          return (
            <article key={post.node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                    color: "#f96969",
                    letterSpacing: "2px",
                  }}
                >
                  <Link to={post.node.fields.slug}>
                    {post.node.frontmatter.title}
                  </Link>
                </h3>
                {/* <TagWrapper>
              {node.frontmatter.tags.map((item, index) => {
                return <Tag key={index}>{item}</Tag>
              })}
            </TagWrapper> */}
                <small>{post.node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.node.frontmatter.description,
                  }}
                />
              </section>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query getPostsByTag($tagName: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      filter: { frontmatter: { tags: { eq: $tagName } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
            date(formatString: "DD/MMMM/YYYY")
          }
        }
      }
    }
  }
`

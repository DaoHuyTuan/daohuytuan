import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

const TagsPage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <div>
        <h1>Tags</h1>
        <ul>
          {/* {group.map(tag => {
          return (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          )
        })} */}
        </ul>
      </div>
    </div>
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
      filter: {frontmatter: {tags:{eq: $tagName}}}
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

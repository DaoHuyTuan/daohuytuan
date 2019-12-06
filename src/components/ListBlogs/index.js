import React from "react"
import { rhythm } from "../../utils/typography"
import { Link } from "gatsby"
const ListBlogs = React.memo(({ posts }) => {
  return (
    <>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  color: "#f96969",
                  fontFamily: "Montserrat,sans-serif",
                  letterSpacing: "2px",
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </>
  )
})

export default ListBlogs

import React from "react"
import { rhythm } from "../../utils/typography"
import { Link } from "gatsby"
import Tag from "../atoms/Tag"
import { TagWrapper } from "../atoms/Tag/Tag.style"
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
                  letterSpacing: "2px",
                }}
              >
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <TagWrapper>
                {node.frontmatter.tags.map((item, index) => {
                  return <Tag key={index}>{item}</Tag>
                })}
              </TagWrapper>
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

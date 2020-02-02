import React from "react";
import { withRouter } from "next/router";
import _range from "lodash/range";
import Link from "next/link";
import pagination from "pagination";
import Layout from "../components/layouts/default";
import Post from "../components/blogs-components/blog-index-item";
import { posts, tils } from "../posts/index";
import { siteMeta } from "../blog.config";
import Bio from "../components/containers/Bio";
import CardTIL from "../components/containers/CardTIL";
import { CardTILContainer } from "../components/containers/CardTIL/CardTIL.style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  BlogContainer,
  BlogLabel
} from "../components/blogs-components/blog.style";
const Blog = React.memo(({ router, page = 1, tills, theme }) => {
  const paginator = new pagination.SearchPaginator({
    prelink: "/",
    current: page,
    rowsPerPage: siteMeta.postsPerPage,
    totalResult: posts.length
  });
  const {
    previous,
    range,
    next,
    fromResult,
    toResult
  } = paginator.getPaginationData();
  const results = _range(fromResult - 1, toResult);
  return (
    <>
      <Bio theme={theme}/>
      {/* <CardTILContainer>
        {
          <Carousel
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 3
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 3
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 3
              }
            }}
          >
            {tills
              .filter((_post, index) => results.indexOf(index) > -1)
              .map((post, index) => (
                <CardTIL
                  key={index}
                  title={post.title}
                  summary={post.summary}
                  date={post.publishedAt}
                  path={post.path}
                />
              ))}
          </Carousel>
        }
      </CardTILContainer> */}

      <BlogContainer>
        <BlogLabel>Blogs</BlogLabel>
        {posts
          .filter((_post, index) => results.indexOf(index) > -1)
          .map((post, index) => (
            <Post
              key={index}
              title={post.title}
              summary={post.summary}
              date={post.publishedAt}
              path={post.path}
            />
          ))}
      </BlogContainer>
      <ul>
        {previous && (
          <li>
            <Link href={`/blog?page=${previous}`} as={`/blog/${previous}`}>
              <a>Previous</a>
            </Link>
          </li>
        )}
        {range.map((page, index) => (
          <li key={index}>
            <Link key={index} href={`/blog?page=${page}`} as={`/blog/${page}`}>
              <a>{page}</a>
            </Link>
          </li>
        ))}
        {next && (
          <li>
            <Link href={`/blog?page=${next}`} as={`/blog/${next}`}>
              <a>Next</a>
            </Link>
          </li>
        )}
      </ul>
      <style jsx>{`
        header {
          margin-bottom: 3em;
        }
      `}</style>
    </>
  );
});

Blog.getInitialProps = async ({ query }) => {
  let tills = [];
  if (tils) {
    tills = tils;
  }
  return query ? { page: query.page, tills } : { tills };
};

export default withRouter(Blog);

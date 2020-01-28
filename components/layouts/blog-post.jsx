import Link from "next/link";
import { siteMeta } from "../../blog.config";
import Layout from "./default";
import SyntaxHighlight from "../blogs-components/syntax-highlight";
import PublishedAt from "../blogs-components/published-at";
import { posts } from "../../posts/index";
import NextPrevPost from "../blogs-components/next-prev-post";
import {
  BlogContent,
  BlogContentTitle,
  BlogEndLine,
  PostPagination
} from "./BlogContent.style";

function BlogPost({ path, meta, children }) {
  const currentPostIndex = posts.map(({ title }) => title).indexOf(meta.title);
  const previousPost = posts[currentPostIndex + 1];
  const nextPost = posts[currentPostIndex - 1];

  return (
    <Layout pageTitle={meta.title} ogImage={meta.image}>
      <SyntaxHighlight />
      <BlogContent>
        <BlogContentTitle>{meta.title}</BlogContentTitle>

        <div>
          <PublishedAt date={meta.publishedAt} link={path} />

          {/* <Link href="/about">
              <a
                color="#aaa"
                rel="author"
                className="p-author h-card"
                href="/about"
              >
                {siteMeta.author}
              </a>
            </Link> */}
        </div>
        <div className="e-content">{children}</div>
        <BlogEndLine />
        <footer>
          {(previousPost || nextPost) && (
            <PostPagination>
              {previousPost && (
                <NextPrevPost
                  title={previousPost.title}
                  path={previousPost.path}
                  position="previous"
                  icon="←"
                />
              )}
              {nextPost && (
                <NextPrevPost
                  title={nextPost.title}
                  path={nextPost.path}
                  position="next"
                  icon="→"
                />
              )}
            </PostPagination>
          )}
        </footer>
      </BlogContent>
    </Layout>
  );
}

export default BlogPost;

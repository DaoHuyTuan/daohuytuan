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
import CommentContainer from "../blogs-components/Comments/CommentContainer";

function BlogPost({ path, meta, children }) {
  const currentPostIndex = posts.map(({ title }) => title).indexOf(meta.title);
  const previousPost = posts[currentPostIndex + 1];
  const nextPost = posts[currentPostIndex - 1];

  return (
    <>
      <SyntaxHighlight />
      <BlogContent>
        <BlogContentTitle>{meta.title}</BlogContentTitle>
        <div>
          <PublishedAt date={meta.publishedAt} link={path} />
        </div>
        <div className="e-content">{children}</div>
        <BlogEndLine />
        <CommentContainer />
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
    </>
  );
}

export default BlogPost;

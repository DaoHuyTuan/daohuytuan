import PropTypes from "prop-types";
import Link from "next/link";
import { ArrowBlog } from "./blog.style";
function NextPrevPost({ title, path, position, icon }) {
  const isNext = position === "next";
  const content = position === "next" ? title + " " + icon : icon + " " + title;
  return (
    <>
      <Link href={path}>
        {/* <small>Read {position} post </small> */}
        <ArrowBlog>{content}</ArrowBlog>
      </Link>
    </>
  );
}

NextPrevPost.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["next", "previous"])
};

export default NextPrevPost;

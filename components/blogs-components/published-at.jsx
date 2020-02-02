import React from "react";
import Link from "next/link";
import { parse, format } from "date-fns";
import { DateCreated } from "./blog.style";

function PublishedAt(props) {
  const { link, date } = props;
  return (
    <>
      <Link href={link}>
        <a href={link} className="u-url" mcolor="#aaa" {...props}>
          <DateCreated>
            {format(parse(date), "MMMM DD, YYYY")}
          </DateCreated>
        </a>
      </Link>
      <style jsx>{`
        a {
          color: #555;
          text-decoration: none;
          font-family: Merriweather;
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default PublishedAt;

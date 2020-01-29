import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";
import { siteMeta } from "../blog.config";

const defaultDescription = siteMeta.description;
const defaultOGURL = siteMeta.siteUrl;
const defaultOGImage = siteMeta.image;

const HeadTag = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      rel="alternate"
      title="RSS Feed"
      type="application/json"
      href={`${siteMeta.siteUrl}/feed.json`}
    />
    <link href="/static/styles/styles.css" type="text/css" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      content={`${siteMeta.siteUrl}${props.ogImage || defaultOGImage}`}
    />
    <meta
      property="og:image"
      content={`${siteMeta.siteUrl}${props.ogImage || defaultOGImage}`}
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

HeadTag.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default HeadTag;

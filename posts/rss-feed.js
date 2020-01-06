const fs = require('fs')
const path = require('path')
const posts = require('./get-blog-posts')
const { siteMeta } = require('../blog.config')
const { Feed } = require("feed");
// https://jsonfeed.org/version/1
const feed = new Feed({
  version: 'https://jsonfeed.org/version/1',
  title: siteMeta.title,
  home_page_url: siteMeta.siteUrl,
  feed_url: `${siteMeta.siteUrl}/feed.json`,
  description: siteMeta.description,
  icon: `${siteMeta.siteUrl}/static/apple-touch-icon-152x152.png`,
  favicon: `${siteMeta.siteUrl}/favicon.ico`,
  author: {
    name: siteMeta.author,
    url: siteMeta.siteUrl,
    avatar: `${siteMeta.siteUrl}/static/_jolvera-avatar.jpg`,
  },
});
  posts.map(post => {
    feed.addItem({
      id: `${siteMeta.siteUrl}${post.path}`,
      url: `${siteMeta.siteUrl}${post.path}`,
      title: post.title,
      content_text: `${post.summary} - ${siteMeta.siteUrl}${post.path}`,
      summary: post.summary,
      image: `${siteMeta.siteUrl}${post.image}`,
      date_published: post.publishedAt,
      author: siteMeta.author,
    })
  }),
  
fs.writeFileSync('./public/static/feed.xml', feed.rss2())

export const menuList = [
  {
    id: 0,
    name: "Blogs",
    url: "/",
    regex: /^(\/|\/posts.*)$/
  },
  {
    id: 1,
    name: "About",
    url: "/about",
    regex: /^(\/about)$/
  },
  {
    id: 2,
    name: "Life",
    url: "/life",
    regex: /^(\/life)$/
  },
  {
    id: 3,
    name: "rss",
    url: "/static/feed.xml",
    regex: /^(\/rss)$/
  },
  {
    id: 4,
    name: "app",
    url: "https://app.daohuytuan.com"
  }
];
export const handleActiveClass = (path, regex) => {
  let result;
  if (path.match(regex) && path.match(regex).length > 0) {
    result = "drawer-active";
  } else {
    result = "";
  }
  return result;
};

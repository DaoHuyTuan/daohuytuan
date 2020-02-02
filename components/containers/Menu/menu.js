export const menuList = [
  {
    id: 0,
    name: "blogs",
    url: "/",
    regex: /^(\/|\/posts.*)$/
  },
  {
    id: 1,
    name: "cv",
    url: "/cv",
    regex: /^(\/cv)$/
  },
  {
    id: 2,
    name: "about",
    url: "/about",
    regex: /^(\/about)$/
  },
  // {
  //   id: 3,
  //   name: "rss",
  //   url: "/static/feed.xml",
  //   regex: /^(\/rss)$/
  // },
  {
    id: 3,
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

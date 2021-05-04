module.exports = {
  layout: "layouts/post.njk",
  parent: "Fireside Chats",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => data.parent
    },
  }
};

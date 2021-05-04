module.exports = {
  layout: "layouts/post.njk",
  parent: "Fireside Chat",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => data.parent
    },
  }
};

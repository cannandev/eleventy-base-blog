module.exports = {
  layout: "layouts/post.njk",
  parent: "Tutorials",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => data.parent
    },
  }
};

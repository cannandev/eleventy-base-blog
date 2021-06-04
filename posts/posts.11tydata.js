module.exports = {
  layout: "layouts/post.njk",
  draft: true,
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => data.parent
    },
  }
};

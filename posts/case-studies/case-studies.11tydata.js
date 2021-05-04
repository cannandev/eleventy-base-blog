module.exports = {
  layout: "layouts/post.njk",
  parent: "Case Studies",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => data.parent
    }
  }
};

module.exports = {
  layout: "layouts/post.njk",
  parent: "Design for Devs",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => data.parent,
    },
  }
};

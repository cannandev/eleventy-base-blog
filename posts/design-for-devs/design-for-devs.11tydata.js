module.exports = {
  layout: "layouts/post.njk",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => "Design for Devs",
    },
  }
};

module.exports = {
  layout: "layouts/list.njk",
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => "Articles",
    },
  }
};

module.exports = function(eleventyConfig) {
  // Input directory: src
  // Output directory: _site

  // The following copies to `_site/img`
  eleventyConfig.addPassthroughCopy('site/img');
  eleventyConfig.addPassthroughCopy('site/css');

  eleventyConfig.addPassthroughCopy('admin');
};

const sassBuild = require('./lib/sass.11ty');

module.exports = function(eleventyConfig) {
  // Input directory: src
  // Output directory: _site

  eleventyConfig.addFilter('sass', sassBuild);

  // The following copies to `_site/img`
  eleventyConfig.addPassthroughCopy('site/img');
  eleventyConfig.addPassthroughCopy('site/css');
  eleventyConfig.addPassthroughCopy('site/js');

  eleventyConfig.addPassthroughCopy('admin');
};

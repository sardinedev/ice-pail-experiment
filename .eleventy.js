const sassBuild = require('./lib/sass.11ty');

module.exports = function(eleventyConfig) {
  // Input directory: src
  // Output directory: _site

  eleventyConfig.addFilter('sass', sassBuild);

  // The following copies to `_site/assets`
  eleventyConfig.addPassthroughCopy('site/assets');

  eleventyConfig.addPassthroughCopy('admin');
};

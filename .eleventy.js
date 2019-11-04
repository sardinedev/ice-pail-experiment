const sassBuild = require('./lib/sass.11ty');

module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: _site

  // Add filters to Nunjucks
  eleventyConfig.addFilter("date", require("./site/_filters/date.11ty"));
  eleventyConfig.addFilter('sass', sassBuild);

  // The following copies to `_site/assets`
  eleventyConfig.addPassthroughCopy('site/assets');
  eleventyConfig.addPassthroughCopy('site/uploads');
  eleventyConfig.addPassthroughCopy('admin');
};

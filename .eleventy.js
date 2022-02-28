const pluginRss = require("@11ty/eleventy-plugin-rss");
const safeLinks = require("@sardine/eleventy-plugin-external-links");
const tinyHTML = require("@sardine/eleventy-plugin-tinyhtml");
const tinyCSS = require("@sardine/eleventy-plugin-tinycss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const dateFormat = require("./lib/date.11ty");

const purgeFromTailwind = content => content.match(/[A-Za-z0-9-_:\/]+/g) || [];
const markdownLibrary = markdownIt({ html: true }).use(markdownItAnchor, {
  permalink: markdownItAnchor.permalink.headerLink()
});

module.exports = function (eleventyConfig) {
  // Config `markdownIt` to use the `markdown-it-anchor` plugin
  // This is a custom plugin that generates an anchor link for each header
  eleventyConfig.setLibrary("md", markdownLibrary);


  // Add filters to Nunjucks
  eleventyConfig.addFilter("date", dateFormat);

  // The following copies to `_site/assets`
  eleventyConfig.addPassthroughCopy("site/assets");
  eleventyConfig.addPassthroughCopy("site/uploads");

  eleventyConfig.addPlugin(pluginRss);

  if (process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addPlugin(safeLinks);
    eleventyConfig.addPlugin(tinyCSS, {
      purgeCSS: {
        keyframes: true,
        extractors: [
          {
            extractor: purgeFromTailwind,
            extensions: ["html"]
          }
        ]
      }
    });
    eleventyConfig.addPlugin(tinyHTML);
  }
};

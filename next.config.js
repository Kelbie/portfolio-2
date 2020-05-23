const remarkHighlight = require('remark-highlight.js');
const withPlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [remarkHighlight]
  }
});

// Generates Blog Index
const withBlog = require('next-mdx-blog');

module.exports = withPlugins([withCSS, withMDX, withBlog], {
  pageExtensions: ['tsx', 'mdx']
});
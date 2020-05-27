const remarkHighlight = require('remark-highlight.js');
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [remarkHighlight]
  }
});

// Generates Blog Index
const withBlog = require('next-mdx-blog');

module.exports = withPlugins([withCSS, withMDX, withBlog, optimizedImages], {
  pageExtensions: ['tsx', 'mdx'],
  imagesFolder: 'public',
  imagesName: '[name].[ext]',
});
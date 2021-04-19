const path = require('path');

require('dotenv').config({
  path: `.env.${process.env_NODE_ENV}`
});

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        }
      }
    }
  ],
}

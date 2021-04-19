const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
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
    },
    {
      resolve: `gatsby-source-microcms`,
      options: {
        apiKey: process.env.API_KEY,
        serviceId: process.env.SERVICE_ID,
        apis: [
          {
            endpoint: `fixed-page`,
          },
        ],
      },
    },
  ],
}

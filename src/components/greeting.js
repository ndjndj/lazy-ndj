import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Greeting = () => {
  const { allMicrocmsFixedPage } = useStaticQuery(
    graphql`
      query {
        allMicrocmsFixedPage(filter: {type: {eq: "about"}}) {
          edges {
            node {
              id
              type
              date
              content
            }
          }
        }
      }
    `
  );

  const about = allMicrocmsFixedPage.edges[0].node;
  const content = about.content;
  
  return (
    <React.Fragment>
      { content }
    </React.Fragment>
  );
}


export default Greeting;

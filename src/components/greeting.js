import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Greeting = () => {
  const data = useStaticQuery(
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
  console.log(data);
  return (
    <React.Fragment>

    </React.Fragment>
  );
}


export default Greeting;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Greeting = ({ data }) => {
  let api = data;
  console.log(api);
  return (
    <React.Fragment>

    </React.Fragment>
  );
}

export const query = graphql`
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
`;

export default Greeting;

import React from 'react';
import { graphql } from 'gatsby';

const Greeting = ({}) => {
  //let api =
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

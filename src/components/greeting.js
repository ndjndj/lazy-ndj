import React from "react"
import { calcDiffYear } from '../common/common';

const Greeting = () => {
  const age = String(calcDiffYear(new Date('1994/06/17 02:03:00'), new Date()));
  return (
    <React.Fragment>
            <h1>
        ndj
      </h1>
      <p>はじめまして、ndjです</p>

      <p>1994年生まれの{age}歳です。</p>
    </React.Fragment>
  );
}

export default Greeting;

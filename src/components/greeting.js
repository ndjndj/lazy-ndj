import React from "react"
import { calcDiffYear, BIRTHDAY } from '../common/common';

const Greeting = () => {
  const age = String(calcDiffYear(BIRTHDAY, new Date()));
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

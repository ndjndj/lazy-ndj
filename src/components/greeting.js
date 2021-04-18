import React from "react"

const Greeting = () => {
  const birth = new Date('1994/06/17 02:03:00');
  const now = new Date();
  const dayMilliSec = 1000 * 60 * 60 * 24;
  const year = 365.25; // うるう年を考慮
  const diff = Math.floor((now.getTime() -birth.getTime()) / (dayMilliSec) / year);

  return (
    <React.Fragment>
            <h1>
        ndj
      </h1>
      <p>はじめまして、ndjです</p>

      <p>1994年生まれの{diff}歳です。</p>
    </React.Fragment>
  );
}

export default Greeting;

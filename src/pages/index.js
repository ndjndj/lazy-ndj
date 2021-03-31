import React from "react"
import Header from '../components/header';
import Blog from '../components/blog';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Blog />
    </React.Fragment>
  );
}

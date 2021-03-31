import React from "react"
import Header from '../components/header';
import Blog from '../components/blog';
import FeatuerdCard from '../components/featuredCard';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <FeatuerdCard />
      <Blog />
    </React.Fragment>
  );
}

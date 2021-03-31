import React from "react"
import Header from '../components/header';
import Blog from '../components/blog';
import FeatuerdCard from '../components/featuredCard';
import FeaturedCardParts from '../components/featuredCardParts';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <FeatuerdCard />
      <FeaturedCardParts />
      <Blog />
    </React.Fragment>
  );
}

import React from "react"
import Header from '../components/header';
import FeatuerdCard from '../components/featuredCard';
import FeaturedCardParts from '../components/featuredCardParts';
import Sidebar from '../components/sidebar';

const Blog = () => {
  return (
    <React.Fragment>
      <Header />
      <FeatuerdCard />
      <FeaturedCardParts />
      <FeaturedCardParts />
      <Sidebar />
    </React.Fragment>
  );
}

export default Blog;

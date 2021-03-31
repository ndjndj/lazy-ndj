import React from "react"
import Header from '../components/header';
import FeatuerdCard from '../components/featuredCard';
import FeaturedCardParts from '../components/featuredCardParts';
import Sidebar from '../components/sidebar';

export default function Blog() {
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

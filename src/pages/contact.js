import React from "react"
import Header from '../components/header';
import Blog from '../components/blog';
import FeatuerdCard from '../components/featuredCard';
import FeaturedCardParts from '../components/featuredCardParts';
import Sidebar from '../components/sidebar';

export default function Contact() {
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

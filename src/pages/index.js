import React from "react"
import About from '../pages/about';
import Blog from '../pages/blog';
import Contact from '../pages/contact';
import Products from '../pages/products';
import { Router } from '@reach/router';


export default function Home() {
  return (
    <Router>
      <About path="/about" />
      <Blog path="/blog" />
      <Contact path="/contact" />
      <Products path="/products" />
    </Router>
  );
}

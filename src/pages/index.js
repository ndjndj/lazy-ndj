import React from "react"
import About from '../pages/about';
import Blog from '../pages/blog';
import Contact from '../pages/contact';
import Products from '../pages/products';
import ProductPost from '../pages/productPost';
import { Router } from '@reach/router';


export default function Home() {
  return (
    <Router>
      <About path="/about" />
      <Blog path="/blog" />
      <Contact path="/contact" />
      <ProductPost path="/products/products" />
      <Products path="/products" />
      <About path="/" />
    </Router>
  );
}

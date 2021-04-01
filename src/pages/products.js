import React from "react"
import Header from '../components/header';
import ProductCard from '../components/productCard';
import Sidebar from '../components/sidebar';

export default function Products() {
  return (
    <React.Fragment>
      <Header />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <Sidebar />
    </React.Fragment>
  );
}

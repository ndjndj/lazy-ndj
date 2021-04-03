import React from "react"
import Header from '../components/header';
import ProductCard from '../components/productCard';
import Sidebar from '../components/sidebar';

const Products = () => {
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

export default Products;

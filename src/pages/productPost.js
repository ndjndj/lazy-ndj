import React from "react"
import Header from '../components/header';
import Sidebar from '../components/sidebar';

const ProductPost = () => {
  return (
    <React.Fragment>
      <Header />
      <h1>Pcikles</h1>
      <p>Chrome 拡張機能です</p>
      <Sidebar />
    </React.Fragment>
  );
}

export default ProductPost;

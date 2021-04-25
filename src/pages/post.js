import React from "react"
import Header from '../components/header';
import Sidebar from '../components/sidebar';

const Post = () => {
  return (
    <React.Fragment>
      <Header />
      <div>ブログの内容</div>
      <Sidebar />
    </React.Fragment>
  );
}

export default Post;

import React from "react"
import Header from '../components/header';
import Sidebar from '../components/sidebar';

export default function About() {
  return (
    <React.Fragment>
      <Header />
      <h1>
        ndj
      </h1>
      <p>はじめまして、ndjです</p>
      
      <Sidebar />
    </React.Fragment>
  );
}

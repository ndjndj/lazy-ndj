import React from "react"
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Greeting from '../components/greeting';

export default function About() {
  return (
    <React.Fragment>
      <Header />
      <Greeting />
      <Sidebar />
    </React.Fragment>
  );
}

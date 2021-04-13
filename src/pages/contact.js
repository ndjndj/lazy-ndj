import React from "react"
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Form from '../components/form';

export default function Contact() {
  return (
    <React.Fragment>
      <Header />
      <Form />
      <Sidebar />
    </React.Fragment>
  );
}

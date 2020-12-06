import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../components/NavBar';
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'

export const Home = () => {


  return (
    <>
      <NavBar />
      <Dashboard />
      <Footer />
     
    </>
  );
}

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from '../components/NavBar';
import FormsDebts from "../components/FormsDebts"
import Footer from '../components/Footer'


export const Debts =()=> {
  return (
    <>
      <NavBar />
      <FormsDebts />
      <Footer />
    </>
  );
}


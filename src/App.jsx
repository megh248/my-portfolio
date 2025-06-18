import React from 'react';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <CustomNavbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
}

export default App; 
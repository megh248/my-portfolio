import React from 'react';
import "./globals.css"; // or "./globals.scss"
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: "Megh | Frontend Developer",
  description: "Portfolio website of Megh Buch - Frontend Developer specializing in React, Bootstrap, and modern web technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
        />
      </head>
      <body>
        <CustomNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

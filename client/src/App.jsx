import React from 'react';
import Navbar from '@components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '@components/footer/Footer';

function App() {
  console.clear();

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

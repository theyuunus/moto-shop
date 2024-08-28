import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './layout/navbar/navbar';
import Footer from './layout/footer/footer';

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

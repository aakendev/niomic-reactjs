import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <div>
      <Header />
      <Link to="/contacts">Contacts</Link>
      <Footer />
    </div>
    );
};

export default App;

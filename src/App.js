import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Profile />
    </React.Fragment>
  );
}

export default App;

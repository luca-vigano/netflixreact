import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NetflixNavbar from './components/NetflixNavbar';
import NetflixFooter from "./components/NetflixFooter";
import "bootstrap-icons/font/bootstrap-icons.css";
import NetflixGalleria from "./components/NetflixGalleria";

function App() {
  return (
    <>
      <header>
      <NetflixNavbar />
      </header>
      <main>
        <NetflixGalleria search={"spiderman"} />
        <NetflixGalleria search={"batman"} />
        <NetflixGalleria search={"deadpool"} />
      </main>
      <footer>
        <NetflixFooter />
      </footer>
    </>
  );
}

export default App;

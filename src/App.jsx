import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';



 const App=()=> {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App;
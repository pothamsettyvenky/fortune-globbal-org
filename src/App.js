import React from 'react';
import './App.scss';
import Header from './components/header';
import Menu from './components/menu';
import MainHeader from './components/mainHeader';
import Aboutus from './components/aboutus';
import Clients from './components/Clients';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/gallery';
function App() {
  const[menuopen,setMenuopen]=React.useState(false);
  return (
    <div className="App">
      
      
      <div className="app">
      
      <Header menuopen={menuopen} setMenuopen={setMenuopen}/>
        <Menu menuopen={menuopen} setMenuopen={setMenuopen}/>
      <div className="Sections">
      <Aboutus/>
        <Clients/>
        <Awards/>
        <Contact/>
        
        <Gallery/>

        <Footer/>
      </div>
      </div>
      
      
    </div>
  );
}

export default App;

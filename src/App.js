import React, { Component } from 'react';
//import logo from './logo.svg';
import HeaderComponent from './components/header/header.component';
import NavbarComponent from './components/navbar/navbar.component';
import CarrouselComponent from './components/carrousel/carrousel.component';
import SilderComponente from './components/slider/slider.component';
import PostComponent from './components/post/post.component';
import FooterComponent from './components/footer/footer.component';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <CarrouselComponent />
        <HeaderComponent />
        <NavbarComponent />
        <SilderComponente />
        <PostComponent />
        <FooterComponent />
        
        

      </div>
    );
  }
}

export default App;

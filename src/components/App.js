import React from 'react';
import './App.scss';
import Main from './Main.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <Header />
        <Main />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;

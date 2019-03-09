import React from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

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

import React from 'react';
import './App.scss';
import Forms from './Forms.js';
import SubmissionCounter from './SubmissionCounter.js';

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <Forms />
        <SubmissionCounter />
      </div>
    );
  }
}

export default App;

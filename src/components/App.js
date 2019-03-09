import React from 'react';
import './App.scss';
import './Forms.js';
import './SubmissionCounter.js';

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

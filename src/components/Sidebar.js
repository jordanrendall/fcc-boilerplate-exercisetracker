import React from 'react';
import './App.scss';
import SubmissionCounter from './SubmissionCounter.js';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <SubmissionCounter />
      </div>
    );
  }
}

export default Sidebar;

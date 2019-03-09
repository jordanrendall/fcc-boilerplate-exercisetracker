import React from 'react';
import './Forms.scss';
import SubmitForm from './SubmitForm.js';

class Forms extends React.Component {
  render() {
    return (
      <div id="forms-container">
        <SubmitForm />
      </div>
    );
  }
}

export default Forms;

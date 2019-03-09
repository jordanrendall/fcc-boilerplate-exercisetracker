import React from 'react';
import './SubmitForm.scss';

class SubmitForm extends React.Component {
  render() {
    return (
      <form id="submitForm">
        <label>Form!</label>
        <input name="date" type="date" />
        <input name="date" type="date" />
        <input name="date" type="date" />
      </form>
    );
  }
}

export default SubmitForm;

import React from 'react';

const Contact = () => {
  return (
    <div className='container'>
      <form className='form'>
        <label className='form-label'>
          Name:
          <input type="text" name="name" className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Email:
          <input type="email" name="email" className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Message:
          <textarea name="message" className='form-textarea'></textarea>
        </label>
        <br />
        <button type="submit" className='form-button'>Send</button>
      </form>
    </div>
  );
}

export default Contact;

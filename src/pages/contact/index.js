import React from 'react';
import './style.css';

function Contact() {
    return (
        <div className='container'>
            <div className='form'>
                <form className='contact-form'>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <br />
                <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );

};

export default Contact;
import React, { useState } from 'react';

export default function Contact () {

    const [yourName, setYourName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorStyle, setErrorStyle] = useState({ display:'none' });

    const emailRE = /^\S+@\S+\.\S+$/g;

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    
        // Update form fields
        if (name === 'yourName') {
            setYourName(value);
        } else if (name === 'email') {
             // Show error message is e-mail is invalid
            if (!value.trim().match(emailRE)) {
                setErrorStyle({ display: 'block' });
            } else {
                setErrorStyle({ display:'none' });
            }
            setEmail(value);
        } else {
            setMessage(value);
        }
    };

    const handleFormSubmit = (e) => {
        // Prevent refresh
        e.preventDefault();

        // FUTURE: Add Fetch POST
        console.log(yourName, email, message);

        // Reset form fields on submit
        setYourName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form>
            <input
                value={yourName}
                name="yourName"
                onChange={handleInputChange}
                type="text"
                placeholder="Your Name"
                required
            />
            <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="text"
                placeholder="Your e-mail"
                required
            />
            <p className="contact" style={errorStyle}>Invalid e-mail address</p>
            <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                required
            ></textarea>
            <button
                onClick={handleFormSubmit}
            ><del>Submit</del></button>
            <p className="contact">This form is currently under construction</p>
        </form>
    );
}
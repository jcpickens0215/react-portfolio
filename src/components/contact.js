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

    const handleFormSubmit = async (e) => {
        // Prevent refresh
        e.preventDefault();

        const userData = {
            name: yourName,
            email,
            message
        }

        const response = await fetch('https://salty-escarpment-92585.herokuapp.com/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        console.log(response);

        // Reset form fields on submit
        setYourName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form>
            <fieldset>
                <legend>Send me a message:</legend>
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
                    placeholder="message"
                    required
                ></textarea>
                <button
                    onClick={handleFormSubmit}
                >Submit</button>
            </fieldset>
        </form>
    );
}
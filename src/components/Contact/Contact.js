import React, { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com'; // Import EmailJS

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('General Inquiry');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Prepare the data to send
        const formData = {
            name,
            email,
            category,
            message,
            to_email: email  // assuming you want to send it to the user's email
        };

        // EmailJS sending function
        emailjs.send('service_0airzng', 'template_q440lqf', formData, 'VBK8HocYtDbHENiiX')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Your query has been received, it will be answered shortly.");
            }, (error) => {
                console.log('FAILED...', error);
                alert("Failed to send the message, please try again.");
            });
    };

    return (
        <div className="contact" id='contact'>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Purchase">Purchase</option>
                    <option value="Employment">Employment</option>
                    <option value="Support">Support</option>
                </select>
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
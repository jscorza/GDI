import React, { useState } from 'react';
import './contact.css'; // Ensure the CSS file is correctly linked

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('General Inquiry');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
        // Here you would normally handle the submission e.g., via API
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

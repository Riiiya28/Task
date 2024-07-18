//src/components/Contact.js
import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact InTech</h1>
                <p>
                    We'd love to hear from you! Get in touch with us to discuss your
                    specific needs and how InTech can help you achieve your digital
                    transformation goals.
                </p>
                <ul>
                    <li>Email: info@intech.com</li>
                    <li>Phone: +1 (888) 555-1212</li>
                    <li>Address: 123 Main Street, Anytown, CA 12345</li>
                </ul>
                <p>
                    You can also fill out the contact form below and we'll get back to
                    you as soon as possible. (**Form integration not included in this example**).
                </p>
      </div>
    );
  }
}

export default Contact;

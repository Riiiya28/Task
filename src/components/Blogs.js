//src/components/Blogs.js
import React, { Component } from 'react';

class Blogs extends Component {
  render() {
    return (
      <div>
        <h1>InTech Blogs</h1>
                <p>
                    Stay up-to-date on the latest trends and insights in the IT and
                    digital transformation landscape by reading our informative blogs.
                    We cover a wide range of topics, including:
                </p>
                <ul>
                    <li>The future of cloud computing</li>
                    <li>Leveraging data analytics for business growth</li>
                    <li>The importance of cybersecurity in today's digital world</li>
                    <li>Top digital marketing strategies for 2024</li>
                    <li>Creating a successful digital transformation roadmap</li>
                </ul>
                <p>
                    Subscribe to our blog to receive notifications when new posts are
                    published. (**Subscription functionality not included in this example**).
                </p>
      </div>
    );
  }
}

export default Blogs;

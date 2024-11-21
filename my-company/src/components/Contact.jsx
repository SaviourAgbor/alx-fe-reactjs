import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div style={{ padding: "20px" }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{ display: 'block', margin: '10px 0' }}
              required
            />
            </div>
            <div>
              <label>Email:</label>
              <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={{ display: 'block', margin: '10px 0' }}
              required
            />
           </div>
           <div>
            <label>Message:</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={{ display: 'block', margin: '10px 0' }}
            />
           </div>
           <button type="submit">Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact;
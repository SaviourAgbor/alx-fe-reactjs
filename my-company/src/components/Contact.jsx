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
         <h1 style={{ color: "cyan"}}>Contact Us</h1>
         <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={{ display: 'block', margin: '10px 0', padding: "0.7em", width: "20em", fontSize:"1em"}}
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
              style={{ display: 'block', margin: '10px 0', padding: '0.7em ', width: "20em", fontSize:"1em" }}
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
              style={{ display: 'block', margin: '10px 0', padding: "0.7em", fontSize: "1.5em", width: "20em", height: "10em"}}
            />
           </div>
           <button type="submit" style={{ backgroundColor: "rgba(52, 225, 235, 0.7)", color: "#000", fontWeight: "900", marginTop: "1em"}}>Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact;
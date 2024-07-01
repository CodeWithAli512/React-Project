import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {


    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "44851b8c-08d5-443a-9456-4b0ff0d609fd");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (

    <div className='contact' id='contact'>
     <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
     </div> 
     <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about any thing that you want me to work on. You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>codewithali@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+772-475-456</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>CA, United State</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' />
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" rows="6" placeholder='Enter Your Message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
     </div>
    </div>

  )
}

export default Contact

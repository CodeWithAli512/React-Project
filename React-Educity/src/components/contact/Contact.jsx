import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import maiil_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

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
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a massage <img src={message_icon} alt="" /></h3>
        <p>Reach out to us through our contact form and we'll get back to you as soon as possible. Our dedicated team is here to help with any questions or concerns you may have. Simply fill out the form with your details and a brief message, and we'll be in touch soon. We look forward to hearing from you!</p>
        <ul>
            <li><img src={maiil_icon} alt="" />contact@GreatStack.dev img</li>
            <li><img src={phone_icon} alt="" />+1 234-567-890</li>
            <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United State</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='dark-btn btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

import React from 'react'
import './contact.css'
import {Mail,Phone,MapPin} from 'lucide-react'

const Contact = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "174d15ae-7bc4-4e6d-a2f9-cc3bf2538560");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Email sent sucessfully");
    }
  };


  return (
    <div id='contact' className="contact">
        <div className="contact-tile">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>let talks</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <div className="mail"><Mail /></div>
                        <p>ayushbhongade88@gamil.com</p>
                    </div>
                    <div className="contact-detail">
                        <div className="phone"><Phone/></div>
                        <p>9096237636</p>
                    </div>
                    <div className="contact-detail">
                        <div className="location"><MapPin /></div>
                        <p>Nagpur, Maharashtra</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="text" placeholder='Enter your Email' name='email'/>
                <label htmlFor="">Write your message</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
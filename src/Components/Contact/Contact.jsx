import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {



  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e73652fd-3505-4ff3-85c5-f7d1c7ec85bb");

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
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" srcset="" /></h3>
        <p>
          Great student support- i enjoy the old feel of the campus. Fund more
          humanities subjects- make more use of the old aspect- less modern=good
        </p>
        <ul>
          <li> <img src={mail_icon} alt="" srcset="" />Muskan@gmail.com.dev</li>
          <li> <img src={phone_icon} alt="" srcset="" />+1 123-456-68</li>
          <li> <img src={location_icon} alt="" srcset="" />address,ABC</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter Youe Name" required/>
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number"/>
          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder="Enter Your message" required></textarea>
          <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" srcset="" /></button>
        </form>
        <span>{result}</span>

      </div>
    </div>
  );
};

export default Contact;
